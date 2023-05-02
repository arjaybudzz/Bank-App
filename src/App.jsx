import { useState } from 'react'
import './App.css'
import dash from './icons/dashboard.png'
import depo from './icons/deposit.png'
import withd from './icons/withdraw.png'
import budg from './icons/budget.png'
import lo from './icons/logout.png'
import hyd from './icons/hydra.png'

let user = {
  name: 'Arjay',
  accountNumber: '1982-1234-1111-5555',
  validity: '02/28',
  email: 'archessonan.1@gmail.com',
  password: '12345',
  accountBalance: 20000,
  expenseItems: [{item: 'itemName', price: 1000}, {item: 'ItemName2', price: 2000}],
  add: () => {

  },
  delete: () => {

  },
  list: () => {

  }
}

function App() {

  return (
    <>
      <div className='App'>
        <SideHeader />
        <MainHeader />
        <MainInterface />
      </div>
    </>
  )
}

//components

function SideHeader() {
  return (
    <div className='side-header'>
      <button id='dashboard-button'>
        <img src= {dash} className='dash-photo'/>
      </button>

      <button id='deposit-button'>
        <img src= {depo} className='deposit-photo'/>
      </button>

      <button id='withdraw-button'>
        <img src= {withd} className='withdraw-photo'/>
      </button>

      <button id='budget-button'>
        <img src= {budg} className='budget-photo'/>
      </button>

      <button id='logout-button'>
        <img src= {lo} className='logout-photo'/>
      </button>
    </div>
  );
}

function MainHeader() {
  return (
    <div className='header'>
      <div className='hydra-icon'>
        <img src={hyd} className='hydra-photo'/>
        <h1>Hydra Bank</h1>
      </div>
    </div>
  );
}

function MainInterface() {
  return (
    <div className='container'>
      <div className='credit-card'>
        <div className='card-info'>
          <span className='account-name'>{user.name}</span>
          <span className='account-number'>{user.accountNumber}</span>
          <span className='validity'>{user.validity}</span>
        </div>
        <div className='balance-statement'>
          <p className='account'>Account Balance:</p>
          <span className='amount'>P {user.accountBalance.toFixed(2)}</span>
        </div>
      </div>

      <DisplayExpense />
      <ExchangeRate />
    </div>
  );
}

function DisplayExpense() {
  return (
      <div className='expense-display'>
        <div className='expense'>
          <p className='expense-statement'>Planned Expenses:</p>
          <span className='amount'>P {0.00.toFixed(2)}</span>
        </div>
        <div className='show-list-container'>
          <button className='show-list'>Show Expense List</button>
        </div>
        <div className='remarks'>
          <p className='advice'>Spend your money wisely!</p>
        </div>
      </div>
  );
}

function ExchangeRate() {
  return (
      <div className='exchange-rate-display'>
        <div className='exchange-rate-text'>
          <p className='exchange-rate-statement'>Exchange Rate:</p>
        </div>
        <div>
          <p className='currency1'>PHP: </p>
        </div>
        <div>
          <p className='currency2'>USD: </p>
        </div>
        <div className='currency-button-container'>
          <button className='change-currency-button'>Change Currency</button>
        </div>
      </div>
  );
}

export default App
