import React,{useState,useContext} from 'react'
import {GlobalContext} from './context/GlobalState';


function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);


  const onSubmit = (e: any ) => {
      e.preventDefault();

      const newTransaction : { id: number, title: string, amount: number } = {
          id : Math.floor(Math.random() * 100000000),
          title,
          amount: +amount
      }

      addTransaction(newTransaction);
  }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={title} required={true} onChange={(e)=> {setTitle(e.target.value)}}
                     placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label>Amount 
                    <br />
                    (negative - expense, positive - income)</label >
                    <input type="number" value={amount} onChange={(e)=> {setAmount(Number(e.target.value))}}
                    placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
