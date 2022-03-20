import { useEffect, useState } from 'react';
import Balance from './Balance';
import './styles/Balance.css'

function Balances() {
  const [balances, setBalances] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/balances")
    .then(res => res.json())
    .then(data => setBalances(data))
  }, [])

  return (
    <div className="Balance shadow">
      <h3>Balances</h3>
      {balances.map(balance => <Balance balance={balance} />)}
    </div>
  )
}

export default Balances