function ButtonGroup({ id, onDeleteItem }) {
  function handleItemDelete() {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteItem(data))
  }

  return (
    <div className="ButtonGroup">
      <button onClick={handleItemDelete}>X</button>
      <button>Edit</button>
    </div>
  )
}

export default ButtonGroup;
