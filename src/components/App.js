import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './Header';
import Balance from './Balance';
import Item from './Item';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Balance />
        <div className="ItemContainer">
          {items.map(item => <Item value={item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
