import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Form.css';

function AddBalanceForm() {
  const [balanceName, setBalanceName] = useState("")
  const [balanceAmount, setBalanceAmount] = useState()
  const navigate = useNavigate();

  function handleBalanceFormSubmit(event) {
    event.preventDefault()

    const formData = {
      name: balanceName,
      amount: balanceAmount,
    }
    
    fetch("http://localhost:9292/balances", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    navigate("/")
  }

  return (
    <div className="Form shadow">
      <h3>Add a Balance</h3>
      <form onSubmit={handleBalanceFormSubmit}>
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
    </div>
    )
}
export default AddBalanceForm;
