import React from 'react'
import CaseHold from './CaseHold'

const HolderCase = (props) => {
    const onHandleExpense = (data)=>{

        let myExpense = {
          ...data,
          id:Math.random().toString()
        }
        console.log(myExpense);
        props.onsavenow(myExpense) 
      }
  return (
    <CaseHold onSave={onHandleExpense} />
  )
}

export default HolderCase