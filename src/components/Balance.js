import ButtonGroup from "./ButtonGroup";

function Balance({ balance, onDeleteBalance, onEditBalance }) {
  function handleBalanceDelete() {
    fetch(`http://localhost:9292/balances/${balance.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteBalance(data))
  }

  return (
    <div className="Balance" key={balance.id}>
      <p>{balance.name} - <span>${parseFloat(balance.amount).toFixed(2)}</span></p>
      <ButtonGroup handleDelete={handleBalanceDelete} handleEdit={() => onEditBalance(balance)} />
    </div>
  )
}

export default Balance;
