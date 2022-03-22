import { Link } from 'react-router-dom';
import Balance from './Balance';
import EditBalance from './EditBalance';
import './styles/Balance.css'

function BalanceContainer({ balances, isEditing, onDeleteBalance, onEditBalance, onUpdateBalance, updateBalance }) {
  return (
    <div className="BalancesContainer shadow">
      <h3>Balances</h3>
      <div className="BalanceContent" style={{height: `${balances.length*60}px`}}>
        {balances.map(balance => {
        if(!isEditing) {
          return <Balance
            balance={balance}
            onDeleteBalance={onDeleteBalance}
            onEditBalance={onEditBalance}
          />
        }
        else {
          if(balance.id === updateBalance.id) return <EditBalance
            balance={balance}
            key={balance.id}
            onEditSubmit={onUpdateBalance}
          />
          else return <Balance
            balance={balance}
            onDeleteBalance={onDeleteBalance}
            onEditBalance={onEditBalance}
          />
        }
      })}
      </div>
      <Link to="/add-balance" >
        <div className="BalanceAdd">
          <button className="button">+</button>
        </div>
      </Link>
    </div>
  )
}

export default BalanceContainer;