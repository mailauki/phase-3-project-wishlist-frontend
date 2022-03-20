import Balance from './Balance';
import Item from './Item';

function Content({items}) {
  return (
    <div className="Content">
      <Balance />
      <div className="ItemContainer">
        {items.map(item => <Item value={item} />)}
        <div className="Item shadow">
          <div className="ItemAdd">
            <h1>+</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
