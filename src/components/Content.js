import { useEffect, useState } from 'react';
import BalanceContainer from './BalanceContainer';
import Sort from './Sort';
import ItemContainer from './ItemContainer';

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
  const [updateItem, setUpdateItem] = useState();
  const [isEditing, setIsEditing] = useState(false)
  const [sort, setSort] = useState("price");

  useEffect(() => {
    fetch("http://localhost:9292/items/by_price")
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
      <Sort sort={sort} onSortChange={handleSortChange}/>
      <BalanceContainer balances={balances} onDeleteBalance={handleDeletedBalance} />
      <ItemContainer
        items={items}
        balances={balances}
        isEditing={isEditing}
        onDeleteItem={handleDeletedItem}
        onEditItem={handleEditItem}
        onUpdateItem={handleUpdateItem}
        updateItem={updateItem}
      />
    </div>
  )
}

export default Content;
