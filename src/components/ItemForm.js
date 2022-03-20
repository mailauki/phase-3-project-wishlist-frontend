import { useEffect, useState } from 'react';
import './styles/ItemForm.css';

function ItemForm() {
  const [balances, setBalances] = useState([])
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState()
  const [itemPriority, setItemPriority] = useState(1)
  const [itemCategory, setItemCategory] = useState("")
  const [balanceId, setBalanceId] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/balances")
    .then(res => res.json())
    .then(data => setBalances(data))
  }, [])

  function handleItemFormSubmit(event) {
    event.preventDefault()
    const formData = {
      name: itemName,
      price: itemPrice,
      priority: itemPriority,
      balance_id: balanceId,
    }
    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="ItemForm shadow">
      <h3>Add an Item</h3>
      <form onSubmit={handleItemFormSubmit}>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            placeholder="New Phone"
            value={itemName}
            onChange={event => setItemName(event.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="$0.00"
            step="0.01"
            value={itemPrice}
            onChange={event => setItemPrice(event.target.value)}
          />
        </div>
        <div>
          <label>Priority #{itemPriority}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={itemPriority}
            onChange={event => setItemPriority(event.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            placeholder="Electronics"
            value={itemCategory}
            onChange={event => setItemCategory(event.target.value)}
          />
        </div>
        <div>
          <label>Balance</label>
          <select onChange={event => setBalanceId(event.target.value)}>
            {balances.map(balance => <option value={balance.id}>{balance.name}</option>)}
          </select>
        </div>
        <input type="submit" className="submit" />
      </form>
    </div>
  )
}

export default ItemForm
