import Balance from './Balance';
import Item from './Item';
import { Link } from 'react-router-dom';

function Content({items}) {
  return (
    <div className="Content">
      <Balance />
      <div className="ItemContainer">
        {items.map(item => <Item item={item} key={item.id} />)}
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
