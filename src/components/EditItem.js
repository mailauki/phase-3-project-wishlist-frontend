import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function EditItem({ item, balances, onEditSubmit }) {
  const {id, name, price, priority, category, balance} = item

  const [itemName, setItemName] = useState(name)
  const [itemPrice, setItemPrice] = useState(price)
  const [itemPriority, setItemPriority] = useState(priority)
  const [itemCategory, setItemCategory] = useState(category)
  const [balanceId, setBalanceId] = useState(balance.id)

  function handleEditItemFormSubmit(event) {
    event.preventDefault()

    const formData = {
      name: itemName,
      price: itemPrice,
      priority: itemPriority,
      category: itemCategory,
      balance_id: balanceId,
    }

    fetch(`http://localhost:9292/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onEditSubmit(data))
  }

  return (
    <div className="Item shadow">
      <form className="EditItem" onSubmit={handleEditItemFormSubmit}>
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
          <ToggleButtonGroup
            className="PriorityToggle"
            exclusive
            value={itemPriority}
            onChange={(event, selected) => setItemPriority(selected)}
          >
            <ToggleButton className="PriorityToggleButton" value={1}>!</ToggleButton>
            <ToggleButton className="PriorityToggleButton" value={2}>!!</ToggleButton>
            <ToggleButton className="PriorityToggleButton" value={3}>!!!</ToggleButton>
            <ToggleButton className="PriorityToggleButton" value={4}>!!!!</ToggleButton>
          </ToggleButtonGroup>
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
          <select value={balanceId} onChange={event => setBalanceId(Number(event.target.value))}>
            {balances.map(balance => <option key={balance.id} value={balance.id}>{balance.name}</option>)}
          </select>
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditItem;