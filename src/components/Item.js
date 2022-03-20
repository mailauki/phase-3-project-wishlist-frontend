import './styles/Item.css'
import CircularProgressBar from './CircularProgressBar'
import ButtonGroup from './ButtonGroup';

function Item({item}) {
  const {id, name, price, priority, category, balance} = item
  const percentage = Math.floor((balance.amount/price) * 100)

  return (
    <div className="Item shadow">
      <h3>{name}</h3>
      <div className="ItemContent">
        <div className="ItemInfo">
          <p>Price: ${parseFloat(price).toFixed(2)}</p>
          <p>Priority: {priority}</p>
          <p>Category: {category}</p>
          <p>Balance: {balance.name}</p>
        </div>
        <CircularProgressBar percentage={percentage} />
      </div>
      <ButtonGroup />
    </div>
  )
}

export default Item;
