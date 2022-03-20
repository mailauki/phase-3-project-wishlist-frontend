function Item(value) {
  const {name, price, priority, category, balance} = value.value
  return (
    <div className="Item">
      <h3>{name}</h3>
      <div className="ItemContent">
        <p>Price: {price}</p>
        <p>Priority: {priority}</p>
        <p>Category: {category}</p>
        <p>Balance: {balance.name}</p>
      </div>
    </div>
  )
}

export default Item;