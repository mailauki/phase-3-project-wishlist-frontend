

function ButtonGroup({ id, onDeleteItem, onEditItem, editData }) {
  function handleItemDelete() {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => onDeleteItem(data))
  }

  function handleItemEdit() {
    fetch(`http://localhost:9292/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData)
    })
    .then(res => res.json())
    .then(data => onEditItem(data))
  }

  return (
    <div className="ButtonGroup">
      <button className="button" onClick={handleItemDelete}>X</button>
      <button className="button" onClick={handleItemEdit}>Edit</button>
    </div>
  )
}

export default ButtonGroup;
