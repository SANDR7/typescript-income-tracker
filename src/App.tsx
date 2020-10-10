import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { IncomeForm } from './components/IncomeForm';
import { IncomeList } from './components/IncomeList';


const App: React.FC = () => {
  const [income, setIncome] = useState<any>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income])

  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
