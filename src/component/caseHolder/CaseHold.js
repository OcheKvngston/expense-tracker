import React from 'react'
import "./style.css"

const CaseHold = (props) => {
    let [expense, setExpense] = React.useState("")
    let [amount, setAmount] = React.useState("")
    let [date, setDate] = React.useState("")

    const handleExpense = (event)=>{
        setExpense(event.target.value)
        console.log(expense);
    }
    const handleAmount = (event)=>{
        setAmount(event.target.value)
        console.log(amount);
    }
    const handleDate = (event)=>{
        setDate(event.target.value)
        console.log(date);
    }
    const handleSubmit = (e)=>{

        e.preventDefault();
        let userData = {
            expense: expense,
            amount: amount,
            date:date
        }
        console.log(userData);
        props.onSave(userData)
        setExpense("")
        setAmount("")
        setDate("")
    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <div className='Contain'>
                    <div className='Phase1'>MODIFY EXPENSE</div>
                    <div className='Phase2'>
                        <h2>EXPENSES TOTAL:</h2>
                        ₦ 1030
                    </div>
                    <div className='Phase3'>
                     <div className='Type1'>
                            <label>Expenses Date</label>
                            <input type="date" onChange={handleDate} value={date}/>
                     </div>
                        <div className='Type2'>
                            <label>Expenses Name</label>
                            <input type="text" onChange={handleExpense} value={expense} />
                        </div>
                        <div className='Type3'>
                            <label>Expenses Amount</label>
                            <input type="number" onChange={handleAmount} value={amount} />
                        </div>
                    </div>
                    <div className='Phase4'>
                        <div className='btnHold'>
                            <div className='btn1'>
                                <button type='submit'>ADD EXPENSE</button>
                            </div>
                            <div className='btn2'>
                                <button>CLEAR EXPENSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default CaseHold