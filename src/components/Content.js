import { useEffect, useState } from 'react';
import Balances from './Balances';
import Item from './Item';
import { Link } from 'react-router-dom';

function Content() {
  const [items, setItems] = useState([])

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

  return (
    <div className="Content">
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
