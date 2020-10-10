import React from 'react'

interface IncomeItemProps {
    income: any,
    index: number,
    removeIncome: (i: number) => void
}

export const IncomeItem: React.FC<IncomeItemProps> = ({income, index, removeIncome}) => {
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = (i: number) => {
        removeIncome(i);
    }

        return (
            <div className="income-item">
                <button className="remove-item"
                onClick={() => removeHandle(index)}
                >x</button>
                <div className="desc">{income.desc}</div>
                <div className="price">€{income.price}</div>
                <div className="date">{`${day} / ${month} / ${year}`}</div>
            </div>
        );
}