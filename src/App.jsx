import { useState } from 'react'
import './App.css'
import dash from './icons/dashboard.png'
import depo from './icons/deposit.png'
import withd from './icons/withdraw.png'
import budg from './icons/budget.png'
import lo from './icons/logout.png'
import hyd from './icons/hydra.png'

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
          <span className='account-name'>Arjay Onan</span>
          <span className='account-number'>1092-2213-1098-1778</span>
          <span className='validity'>02/28</span>
        </div>
        <div className='balance-statement'>
          <p className='account'>Account Balance:</p>
          <span className='amount'>P {2000.50.toFixed(2)}</span>
        </div>
      </div>

      <DisplayExpense />
    </div>
  );
}

function DisplayExpense() {
  return (
    <div className='container'>
      <div className='expense-display'>
        <div className='expense'>
          <p className='expense-statement'>Planned Expenses:</p>
          <span className='amount'>P {0.00.toFixed(2)}</span>
        </div>
        <div className='remarks'>

        </div>
      </div>
    </div>
  );
}

export default App
