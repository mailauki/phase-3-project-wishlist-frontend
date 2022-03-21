import './styles/Item.css'
import CircularProgressBar from './CircularProgressBar'
import ButtonGroup from './ButtonGroup';

function Item({ item, onDeleteItem }) {
  const {id, name, price, priority, category, balance} = item
  const percentage = Math.floor((balance.amount/price) * 100)

  function handleItemDelete() {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteItem(data))
  }

  function handleItemEdit() {
    // fetch(`http://localhost:9292/items/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editData)
    // })
    // .then(res => res.json())
    // .then(data => onEditItem(data))
  }

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
      <ButtonGroup id={id} handleDelete={handleItemDelete} handleEdit={handleItemEdit} />
    </div>
  )
}

export default Item;
