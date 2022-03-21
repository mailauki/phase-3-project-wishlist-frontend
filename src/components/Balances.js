import { Link } from 'react-router-dom';
import Balance from './Balance';
import './styles/Balance.css'

function Balances({ balances, onDeleteBalance }) {
  return (
    <div className="Balances shadow">
      <h3>Balances</h3>
      <div className="BalanceContent">
        {balances.map(balance => <Balance
          balance={balance}
          onDeleteBalance={onDeleteBalance}/>)}
      </div>
      <Link to="/add-balance" >
        <div className="BalanceAdd">
          <button className="button">+</button>
        </div>
      </Link>
    </div>
  )
}

export default Balances;