"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "../../utils/auth";
import AccountBalance from "../../components/dashboard/AccountBalance";
import UpcomingWithdrawals from "../../components/dashboard/UpcomingWithdrawals";
import RecentWithdrawals from "../../components/dashboard/RecentWithdrawals";
import ActiveQuotes from "../../components/dashboard/ActiveQuotes";

export default function AdminDashboard() {
    const router = useRouter();
    const [accountBalance, setAccountBalance] = useState<number | null>(null);
    const [upcomingWithdrawals, setUpcomingWithdrawals] = useState([]);
    const [recentWithdrawals, setRecentWithdrawals] = useState([]);
    const [activeQuotes, setActiveQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAdmin()) {
            router.push("/");
        } else {
            fetchDashboardData();
        }
    }, [router]);

    const fetchDashboardData = async () => {
        try {
            const data = {
                accountBalance: 200,
                upcomingWithdrawals: [{ id: 1, amount: 12, date: "2024/12/25" }],
                recentWithdrawals: [{ id: 1, amount: 12, date: "2025/01/25" }],
                activeQuotes: [{ id: 1, title: "test", amount: 200 }],
            };
            setAccountBalance(data.accountBalance);
            setUpcomingWithdrawals(data.upcomingWithdrawals);
            setRecentWithdrawals(data.recentWithdrawals);
            setActiveQuotes(await activeQuotesResponse.json());
        } catch (error) {
            console.error("Failed to fetch stats:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

            {/* Solde du Compte Bancaire */}
            {accountBalance !== null && <AccountBalance balance={accountBalance} />}

            {/* Prochains Prélèvements */}
            <UpcomingWithdrawals withdrawals={upcomingWithdrawals} />

            {/* Derniers Prélèvements */}
            <RecentWithdrawals withdrawals={recentWithdrawals} />

            {/* Devis en Cours */}
            <ActiveQuotes quotes={activeQuotes} />
        </div>
    );
}
