import { useState } from 'react';
import './styles/EditBalance.css'

function EditBalance({ balance, onEditSubmit }) {
  const {id, name, amount } = balance

  const [balanceName, setBalanceName] = useState(name)
  const [balanceAmount, setBalanceAmount] = useState(amount)


  function handleEditBalanceFormSubmit(event) {
    event.preventDefault()

    const formData = {
      name: balanceName,
      amount: balanceAmount,
    }

    fetch(`http://localhost:9292/balances/${id}`, {
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
    <form className="EditBalance" onSubmit={handleEditBalanceFormSubmit}>
      <div>
        <label>Balance Name</label>
        <input
          type="text"
          placeholder="Piggy Bank"
          value={balanceName}
          onChange={event => setBalanceName(event.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          placeholder="$0.00"
          step="0.01"
          value={balanceAmount}
          onChange={event => setBalanceAmount(event.target.value)}
        />
      </div>
      <button type="submit" className="submit">Submit</button>
    </form>
  )
}

export default EditBalance;