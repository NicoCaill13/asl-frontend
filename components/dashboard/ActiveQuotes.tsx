import React from "react";

interface Quote {
    id: number;
    title: string;
    amount: number;
}

interface ActiveQuotesProps {
    quotes: Quote[];
}

export default function ActiveQuotes({ quotes }: ActiveQuotesProps) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Devis en Cours</h2>
            <ul className="space-y-2">
                {quotes.map((quote) => (
                    <li key={quote.id} className="bg-gray-100 rounded-md p-4 shadow">
                        <p>Intitulé: {quote.title}</p>
                        <p>Montant: {quote.amount} €</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
