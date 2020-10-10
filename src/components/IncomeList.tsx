import React from 'react'
import { IncomeItem } from './IncomeItem'

interface IncomeListProps {
    income: any, 
    setIncome: (temp: number) => void
}

export const IncomeList: React.FC<IncomeListProps> = ({
    income,
    setIncome,
}) => {
    const sortByDate = (a: { date: number }, b: { date: number }) => {
        return a.date - b.date;
    }

    const removeIncome = (i: number) => {
        let temp = income.filter((v: number, index: number) => index !== i);
        setIncome(temp);
    }

        return (
          <div className="income-list">
              {
                  income.sort(sortByDate).map((value: any, index: number) => (
                      <IncomeItem key={index} income={value} index={index} removeIncome={removeIncome}/>
                  ))
              }
          </div>  
        );
}