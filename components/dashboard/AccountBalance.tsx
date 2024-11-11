import React from "react";

interface AccountBalanceProps {
    balance: number;
}

export default function AccountBalance({ balance }: AccountBalanceProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl font-medium mb-2">Solde du Compte Bancaire</h2>
            <p className="text-3xl font-semibold text-indigo-500">{balance} €</p>
        </div>
    );
}
