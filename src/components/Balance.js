import ButtonGroup from "./ButtonGroup";

function Balance({ balance, onDeleteBalance }) {
  function handleBalanceDelete() {
    fetch(`http://localhost:9292/balances/${balance.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteBalance(data))
  }

  function handleBalanceEdit() {
    // fetch(`http://localhost:9292/balances/${balance.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editData)
    // })
    // .then(res => res.json())
    // .then(data => onEditBalance(data))
  }
  return (
    <div className="Balance" key={balance.id}>
      <p>{balance.name} - ${parseFloat(balance.amount).toFixed(2)}</p>
      <ButtonGroup handleDelete={handleBalanceDelete} handleEdit={handleBalanceEdit} />
    </div>
  )
}

export default Balance;
