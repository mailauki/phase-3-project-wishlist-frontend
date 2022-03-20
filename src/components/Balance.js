import ButtonGroup from "./ButtonGroup";

function Balance({balance}) {
  return (
    <div key={balance.id}>
      <p>{balance.name} - ${balance.amount}</p>
      <ButtonGroup />
    </div>
  )
}

export default Balance
