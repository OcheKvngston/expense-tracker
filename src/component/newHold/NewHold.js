import React from 'react' 
import HolderCase from '../caseHolder/HolderCase'
import"./style.css"

const NewHold = () => {
  const Data = [
    {
      id:1,
      expense:"Book",
      amount:250,
      date:"2023-02-15"
    },
    {
      id:2,
      expense:"Chair",
      amount:500,
     date:"2020-04-20" 
    },
    {
      id:3,
      expense:"Shoe",
      amount:360,
      date:"2021-03-24"
    },
  ]
  
  const [myData,setMyData] = React.useState([])
  const addMyExpense = (data)=>{
    setMyData([data,...myData])
  }
  return (
    <div>
        <div>
          <HolderCase onsavenow = {addMyExpense} />
        </div>
        <div className='TableHolder'>
          <table>
            <tr>
              <th><div>Expenses</div></th>
              <th><div>Amount</div></th>
              <th><div>Date</div></th>
              <th><div>Delete</div></th>
            </tr>
            {
             myData.map((props)=>(
             <tr>
                <td>{props.expense}</td>
                <td>{props.amount}</td>
                <td>{props.date}</td>
                <td>Delete</td>
              </tr>
             ))
            }
          </table>
        </div>
    </div>
  )
}

export default NewHold