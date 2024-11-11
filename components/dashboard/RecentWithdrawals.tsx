import React from "react";

interface Withdrawal {
    id: number;
    amount: number;
    date: string;
}

interface RecentWithdrawalsProps {
    withdrawals: Withdrawal[];
}

export default function RecentWithdrawals({ withdrawals }: RecentWithdrawalsProps) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Derniers Prélèvements</h2>
            <ul className="space-y-2">
                {withdrawals.map((withdrawal) => (
                    <li key={withdrawal.id} className="bg-gray-100 rounded-md p-4 shadow">
                        <p>Montant: {withdrawal.amount} €</p>
                        <p>Date: {new Date(withdrawal.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
