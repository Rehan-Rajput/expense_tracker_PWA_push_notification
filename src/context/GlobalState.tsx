import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';
import {TransactionType} from '../Types';

// Initial state
const initialState = {
    transactions : [
        {id:1, title:"Book", amount:22}
    ],
    deleteTransaction : (id: number) => {},
    addTransaction : (transaction: TransactionType) => {}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider : React.FC = ({children}) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id : number){
      dispatch({
          type: "DELETE_TRANSACTION",
          id
      });
  }   

  function addTransaction(transaction : TransactionType){
    dispatch({
        type: "ADD_TRANSACTION",
        transaction
    });
}   

     return (<GlobalContext.Provider value={{
         transactions:state.transactions,
         deleteTransaction,
         addTransaction
     }}>
         {children}
     </GlobalContext.Provider>);
}