
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
  
  const DarkSortToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    '& .MuiToggleButtonGroup-grouped': {
      border: "none",
      background: "#292929",
      boxShadow:  "3px 3px 6px #212121, -3px -3px 6px #313131",
      margin: "0 14px",
      textShadow: "#313131 1px 1px 2px",

      '&:not(:first-of-type)': {
        color: "#ccc",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        border: "none",
      },
      '&:first-of-type': {
        color: "#ccc",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
      },
      '&:hover': {
        background: "linear-gradient(145deg, #252525, #2c2c2c)",
      },
      '&.Mui-selected': {
        color: "#dec300",
      },
      '&.Mui-selected:hover': {
        background: "linear-gradient(145deg, #252525, #2c2c2c)",
      },
    },
  }))

  const LightSortToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    '& .MuiToggleButtonGroup-grouped': {
      border: "none",
      background: "#e0e0e0",
      boxShadow:  "3px 3px 6px #b3b3b3, -3px -3px 6px #ffffff",
      margin: "0 14px",
      textShadow: "#fff 1px 1px 2px",

      '&:not(:first-of-type)': {
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        border: "none",
      },
      '&:first-of-type': {
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
      },
      '&:hover': {
        background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
      },
      '&.Mui-selected': {
        color: "#ccb300",
        background: "#e0e0e0",
      },
      '&.Mui-selected:hover': {
        background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
      },
    },
  }))

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
        backgroundColor: "rgba(60, 60, 60, 0.4)"
      },
      '&.Mui-selected': {
        backgroundColor: "rgba(60, 60, 60, 0.7)",
        color: "#e0e0e0",
      },
      '&.Mui-selected:hover': {
        backgroundColor: 'rgba(60, 60, 60, 0.9)'
      },
    },
  }))
  
  const DarkSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#ddd",
      '&:hover': {
        backgroundColor: "rgba(80, 80, 80, 0.3)",
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
              DarkSortToggleButtonGroup={DarkSortToggleButtonGroup}
              LightSortToggleButtonGroup={LightSortToggleButtonGroup}
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
