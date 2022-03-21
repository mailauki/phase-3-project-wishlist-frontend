import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Balance from './Balance';
import './styles/Balance.css'

function Balances() {
  const [balances, setBalances] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/balances")
    .then(res => res.json())
    .then(data => setBalances(data))
  }, [])

  function handleDeletedBalance(deletedBalance) {
    const updatedBalances = balances.filter(balance => {
      if(balance.id !== deletedBalance.id) return balance
    })
    setBalances(updatedBalances)
  }

  return (
    <div className="Balances shadow">
      <h3>Balances</h3>
      <div className="BalanceContent">
        {balances.map(balance => <Balance key={balance.id} balance={balance} onDeleteBalance={handleDeletedBalance} />)}
      </div>
      <Link to="/add-balance" >
        <div className="BalanceAdd">
          <button className="button">+</button>
        </div>
      </Link>
    </div>
  )
}

export default Balances