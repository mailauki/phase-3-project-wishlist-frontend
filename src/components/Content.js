import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Balances from './Balances';
import Item from './Item';
import EditItem from './EditItem';

function Content() {
  const loadingBalance = {name: "Loading name...", amount: 0.00}
  const loadingItem = {
    name: "Loadinng name...",
    price: 0.00,
    priority: 1,
    category: "Please wait...",
    balance: loadingBalance
  }

  const [items, setItems] = useState([loadingItem]);
  const [balances, setBalances] = useState([loadingBalance]);
  const [sort, setSort] = useState("price");
  const [updateItem, setUpdateItem] = useState(loadingItem);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  
  useEffect(() => {
    fetch("http://localhost:9292/balances")
    .then(res => res.json())
    .then(data => setBalances(data))
  }, [])

  function handleDeletedItem(deletedItem) {
    const updatedItems = items.filter(item => {
      if(item.id !== deletedItem.id) return item
    })
    
    setItems(updatedItems)
  }

  function handleDeletedBalance(deletedBalance) {
    const updatedBalances = balances.filter(balance => {
      if(balance.id !== deletedBalance.id) return balance
    })

    setBalances(updatedBalances)
  }

  function handleEditItem(item) {
    setUpdateItem(item)
    setIsEditing(true)
  }

  function handleUpdateItem(updatedItem) {
    setUpdateItem(updatedItem)
    setIsEditing(false)

    const updatedItems = items.map(item => {
      if (item.id === updatedItem.id) return updatedItem
      else return item
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
      <Balances balances={balances} onDeleteBalance={handleDeletedBalance} />
      <div className="ItemContainer">
        {items.map(item => {
          if(!isEditing) {
            return <Item
              item={item}
              onDeleteItem={handleDeletedItem}
              onEditItem={handleEditItem}
            />
          }
          else {
            if(item.id === updateItem.id) return <EditItem
            item={item}
            key={item.id}
            balances={balances}
            onEditSubmit={handleUpdateItem}
          />
            else return <Item
            item={item}
            onDeleteItem={handleDeletedItem}
            onEditItem={handleEditItem}
          />
          }
        })}
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
