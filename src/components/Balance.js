import { useEffect, useState } from 'react';
import './styles/Balance.css'

function Balance() {
  const [balances, setBalances] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/balances")
    .then(res => res.json())
    .then(data => setBalances(data))
  }, [])

  return (
    <div className="Balance shadow">
      <h3>Balances</h3>
      {balances.map(balance => <p>{balance.name} - ${balance.amount}</p>)}
    </div>
  )
}

export default Balance