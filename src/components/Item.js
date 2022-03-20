import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/Item.css'

function Item(value) {
  const {name, price, priority, category, balance} = value.value
  const percentage = Math.floor((balance.amount/price) * 100)

  return (
    <div className="Item">
      <h3>{name}</h3>
      <div className="ItemContent">
        <div className="ItemInfo">
          <p>Price: ${price}</p>
          <p>Priority: {priority}</p>
          <p>Category: {category}</p>
          <p>Balance: {balance.name}</p>
        </div>
        <div style={{width: 75, height: 75}}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
          />
        </div>
      </div>
    </div>
  )
}

export default Item;