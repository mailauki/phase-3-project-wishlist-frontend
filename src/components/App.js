import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Content from './Content';
import ItemForm from './ItemForm';

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
      <Routes>
        <Route exact path="/" element={<Content items={items} />} />
          <Route path="/add-item" element={<ItemForm />} />
        </Routes>
    </div>
  );
}

export default App;
