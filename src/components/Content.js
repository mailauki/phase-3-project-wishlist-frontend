import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Balances from './Balances';
import Item from './Item';

function Content() {
  const [items, setItems] = useState([])
  const [sort, setSort] = useState("price");

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  function handleDeletedItem(deletedItem) {
    console.log(deletedItem.id)
    const updatedItems = items.filter(item => {
      if(item.id !== deletedItem.id) return item
    })
    setItems(updatedItems)
  }

  function handleSortChange(event, selected) {
    setSort(selected)
    fetch(`http://localhost:9292/items/by_${selected}`)
    .then(res => res.json())
    .then(data => setItems(data))
  }

  return (
    <div className="Content">
      <ToggleButtonGroup exclusive value={sort} onChange={handleSortChange}>
        <ToggleButton value="price">Price</ToggleButton>
        <ToggleButton value="priority">Priority</ToggleButton>
      </ToggleButtonGroup>
      <Balances />
      <div className="ItemContainer">
        {items.map(item => <Item item={item} key={item.id} onDeleteItem={handleDeletedItem} />)}
        <div className="Item shadow">
          <Link to="/add-item" >
            <div className="ItemAdd">
              <h1>+</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Content;
