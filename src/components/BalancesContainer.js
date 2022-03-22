import { Link } from 'react-router-dom';
import Balance from './Balance';
import './styles/Balance.css'

function BalancesContainer({ balances, onDeleteBalance }) {
  return (
    <div className="BalancesContainer shadow">
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

export default BalancesContainer;