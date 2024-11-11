import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    // Vérifie si l'utilisateur n'est pas connecté pour les pages protégées
    if (!token && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Si l'utilisateur tente d'accéder à une page admin
    if (pathname.startsWith("/admin")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            const decodedToken = jwtDecode<{ role: string }>(token);

            if (decodedToken.role === "OWNER") {
                return NextResponse.redirect(new URL("/", request.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/admin/:path*"], // Applique le middleware à /admin et toutes ses sous-routes
};
