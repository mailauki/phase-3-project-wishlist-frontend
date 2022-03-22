
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ToggleButtonGroup, Switch, styled } from '@mui/material';
import './styles/App.css';
import './styles/form.css';
import './styles/Dark.css';
import Header from './Header';
import Content from './Content';
import AddItemForm from './AddItemForm';
import AddBalanceForm from './AddBalanceForm';

function App() {
  const [darkOn, setDarkOn] = useState(false)
  
  const DarkToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    '& .MuiToggleButtonGroup-grouped': {
      borderColor: "#555",
      '&:not(:first-of-type)': {
        color: "#ccc",
      },
      '&:first-of-type': {
        color: "#ccc",
      },
      '&:hover': {
        backgroundColor: "rgba(60, 60, 60, 0.5)"
      },
      '&.Mui-selected': {
        backgroundColor: "rgba(60, 60, 60, 0.5)",
        color: "#e0e0e0",
      },
      '&.Mui-selected:hover': {
        backgroundColor: 'rgba(60, 60, 60, 0.8)'
      },
    },
  }))
  
  const DarkSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#ddd",
      '&:hover': {
        backgroundColor: "rgba(80, 80, 80, 0.5)",
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "black",
    },
  }));

  return (
    <div className={darkOn ? "App dark" : "App"}>
      <Header
        darkOn={darkOn}
        darkify={setDark => setDarkOn(setDark)}
        DarkSwitch={DarkSwitch}
      />

      <Routes>
        <Route exact path="/" element={
            <Content
              darkOn={darkOn}
              DarkToggleButtonGroup={DarkToggleButtonGroup}
            />
        } />
        <Route path="/add-item" element={
          <AddItemForm
            darkOn={darkOn} 
            DarkToggleButtonGroup={DarkToggleButtonGroup}
          />
        } />
        <Route path="/add-balance" element={
          <AddBalanceForm darkOn={darkOn} />
        } />
      </Routes>
    </div>
  );
}

export default App;
