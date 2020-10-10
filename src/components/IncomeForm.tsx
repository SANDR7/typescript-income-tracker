import React, { useRef } from 'react'

interface IncomeFormProps {
    income: any,
    setIncome: any
}

export const IncomeForm: React.FC<IncomeFormProps> = ({
    income,
    setIncome
}) => {

    const desc: any  = useRef<HTMLInputElement>(null);
    const date: any = useRef<HTMLInputElement>(null);
    const price: any = useRef<HTMLInputElement>(null);



    const AddIncome = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let d: any = date.current?.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "desc": desc.current.value,
            "price": price.current?.value,
            "date": newD.getTime()
        }]);

        desc.current.value = "";
        price.current.value = null;
        date.current.value = null
    }

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc"
                placeholder="Income Description..." ref={desc}/>
                <input type="number" name="price" id="price"
                placeholder="Price.." ref={price}/>
                <input type="date" name="date" id="date"
                placeholder="Income date.." ref={date}/>
                <input type="submit" value="Add Income"/>
            </div>
        </form>
    );
}