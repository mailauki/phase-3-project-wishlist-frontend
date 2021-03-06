import { useEffect, useState } from 'react';
import BalanceContainer from './BalanceContainer';
import Sort from './Sort';
import ItemContainer from './ItemContainer';

function Content({ darkOn, DarkToggleButtonGroup, DarkSortToggleButtonGroup, LightSortToggleButtonGroup }) {
  const loadingBalance = {name: "Loading name...", amount: 0.00}
  const loadingItem = {
    name: "Loading name...",
    price: 0.00,
    priority: 1,
    category: "Please wait...",
    balance: loadingBalance
  }

  const [items, setItems] = useState([loadingItem]);
  const [balances, setBalances] = useState([loadingBalance]);
  const [updateItem, setUpdateItem] = useState();
  const [isEditingItem, setIsEditingItem] = useState(false)
  const [updateBalance, setUpdateBalance] = useState();
  const [isEditingBalance, setIsEditingBalance] = useState(false)
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

  function handleEditItem(item) {
    setUpdateItem(item)
    setIsEditingItem(true)
  }

  function handleUpdateItem(updatedItem) {
    setUpdateItem(updatedItem)
    setIsEditingItem(false)

    const updatedItems = items.map(item => {
      if (item.id === updatedItem.id) return updatedItem
      else return item
    })

    setItems(updatedItems)
  }

  function handleDeletedBalance(deletedBalance) {
    const updatedBalances = balances.filter(balance => {
      if(balance.id !== deletedBalance.id) return balance
    })

    setBalances(updatedBalances)
  }

  function handleEditBalance(balance) {
    setUpdateBalance(balance)
    setIsEditingBalance(true)
  }
  
  function handleUpdateBalance(updatedBalance) {
    setUpdateBalance(updatedBalance)
    setIsEditingBalance(false)

    const updatedBalances = balances.map(balance => {
      if (balance.id === updatedBalance.id) return updatedBalance
      else return balance
    })

    setBalances(updatedBalances)
  }

  function handleSortChange(event, selected) {
    setSort(selected)

    fetch(`http://localhost:9292/items/by_${selected}`)
    .then(res => res.json())
    .then(data => setItems(data))
  }

  return (
    <div className="Content">
      <Sort
        sort={sort}
        onSortChange={handleSortChange}
        darkOn={darkOn}
        DarkSortToggleButtonGroup={DarkSortToggleButtonGroup}
        LightSortToggleButtonGroup={LightSortToggleButtonGroup}
      />
      <BalanceContainer
        balances={balances}
        isEditing={isEditingBalance}
        onDeleteBalance={handleDeletedBalance}
        onEditBalance={handleEditBalance}
        onUpdateBalance={handleUpdateBalance}
        updateBalance={updateBalance}
      />
      <ItemContainer
        items={items}
        balances={balances}
        isEditing={isEditingItem}
        onDeleteItem={handleDeletedItem}
        onEditItem={handleEditItem}
        onUpdateItem={handleUpdateItem}
        updateItem={updateItem}
        darkOn={darkOn}
        DarkToggleButtonGroup={DarkToggleButtonGroup}
      />
    </div>
  )
}

export default Content;
