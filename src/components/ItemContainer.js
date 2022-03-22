import { Link } from 'react-router-dom';
import Item from './Item';
import EditItem from './EditItem';

function ItemContainer({ items, balances, isEditing, onDeleteItem, onEditItem, onUpdateItem, updateItem, darkOn, DarkToggleButtonGroup }) {
  return (
    <div className="ItemContainer">
      {items.map(item => {
        if(!isEditing) {
          return <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            darkOn={darkOn}
          />
        }
        else {
          if(item.id === updateItem.id) return <EditItem
            item={item}
            key={item.id}
            balances={balances}
            onEditSubmit={onUpdateItem}
            darkOn={darkOn}
            DarkToggleButtonGroup={DarkToggleButtonGroup}
          />
          else return <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            darkOn={darkOn}
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
  )
}

export default ItemContainer;