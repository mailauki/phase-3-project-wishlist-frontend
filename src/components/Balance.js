import ButtonGroup from "./ButtonGroup";

function Balance({balance}) {
  return (
    <div className="Balance" key={balance.id}>
      <p>{balance.name} - ${parseFloat(balance.amount).toFixed(2)}</p>
      <ButtonGroup />
    </div>
  )
}

export default Balance
