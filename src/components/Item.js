import './styles/Item.css'
import CircularProgressBar from './CircularProgressBar'

function Item(value) {
  const {name, price, priority, category, balance} = value.value
  const percentage = Math.floor((balance.amount/price) * 100)

  return (
    <div className="Item shadow">
      <h3>{name}</h3>
      <div className="ItemContent">
        <div className="ItemInfo">
          <p>Price: ${price}</p>
          <p>Priority: {priority}</p>
          <p>Category: {category}</p>
          <p>Balance: {balance.name}</p>
        </div>
        <CircularProgressBar percentage={percentage} />
      </div>
    </div>
  )
}

export default Item;
