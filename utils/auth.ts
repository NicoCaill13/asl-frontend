import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface TokenPayload {
    role: string;
}

export function isAdmin() {
    const token = Cookies.get("token");

    if (!token) return false;

    const decodedToken = jwtDecode<TokenPayload>(token);

    // Si le rôle est différent de "owner", l'utilisateur a accès à l'espace admin
    return decodedToken.role !== "OWNER";
}
