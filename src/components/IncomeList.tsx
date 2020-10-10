import React from 'react'
import { IncomeItem } from './IncomeItem'

interface IncomeListProps {
    income: any,
    setIncome: any
}

export const IncomeList: React.FC<IncomeListProps> = ({
    income,
    setIncome,
}) => {
    const sortByDate = (a: { date: number }, b: { date: number }) => {
        return a.date - b.date;
    }

    const removeIncome = (i: any) => {
        let temp = income.filter((v: any, index: any) => index !== i);
        setIncome(temp);
    }

        return (
          <div className="income-list">
              {
                  income.sort(sortByDate).map((value: any, index: string | number | null | undefined) => (
                      <IncomeItem key={index} income={value} index={index} removeIncome={removeIncome}/>
                  ))
              }
          </div>  
        );
}