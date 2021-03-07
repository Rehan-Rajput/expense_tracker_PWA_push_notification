import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import {GlobalProvider} from './context/GlobalState'; 
//import firebase from './firebase';
import {configNotification} from './firebase';

import './App.css';

function App() {

configNotification();


  return (
    <GlobalProvider>
      <Header/>
      <div className ="">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;