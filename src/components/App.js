
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Content from './Content';
import AddItemForm from './AddItemForm';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Content />} />
          <Route path="/add-item" element={<AddItemForm />} />
        </Routes>
    </div>
  );
}

export default App;
