import ButtonGroup from "./ButtonGroup";

function Balance({balance}) {
  return (
    <div key={balance.id}>
      <p>{balance.name} - ${parseFloat(balance.amount).toFixed(2)}</p>
      <ButtonGroup />
    </div>
  )
}

export default Balance
