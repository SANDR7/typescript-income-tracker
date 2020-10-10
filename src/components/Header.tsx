import React from 'react'

interface HeaderProps {
    totalIncome: number
}

export const Header: React.FC<HeaderProps> = ({
    totalIncome,
}) => {
    return (
        <header>
            <h1>Income Tracker</h1>
            <div className="total-income">€{totalIncome}</div>
        </header>
    );
}