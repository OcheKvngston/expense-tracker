import React from 'react'
import NewHold from '../newHold/NewHold'
import "./style.css"

const ExpenseHome = () => {
  return (
    <div>
        <center>
        <div className='container'>
            <div className='Header'>MONEY SPACE</div>
            <NewHold/>

        </div>
        </center>
    </div>
  )
}

export default ExpenseHome