import './styles/Item.css'
import CircularProgressBar from './CircularProgressBar'
import ButtonGroup from './ButtonGroup';

function Item({ item, onDeleteItem, onEditItem, darkOn }) {
  const {id, name, price, priority, category, balance} = item
  const percentage = Math.floor((balance.amount/price) * 100)

  function handleItemDelete() {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteItem(data))
  }

  return (
    <div className="Item shadow">
      <h3>{name}</h3>
      <div className="ItemContent">
        <div className="ItemInfo">
          <p>PRICE: <span>${parseFloat(price).toFixed(2)}</span></p>
          <p>PRIORITY: <span>{priority}</span></p>
          <p>CATEGORY: <span>{category}</span></p>
          <p>BALANCE: <span>{balance.name}</span></p>
        </div>
        <CircularProgressBar percentage={percentage} darkOn={darkOn} />
      </div>
      <ButtonGroup id={id} handleDelete={handleItemDelete} handleEdit={() => onEditItem(item)} />
    </div>
  )
}

export default Item;
