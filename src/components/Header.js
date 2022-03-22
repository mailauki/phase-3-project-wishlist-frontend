import { Switch } from '@mui/material';

function Header({ darkOn, darkify, DarkSwitch }) {
  function handleSwitchChange() {
    darkify(!darkOn)
  }
  return (
    <header className="Header">
      <h3>Wish List</h3>
      <div>
        <label>{darkOn ? "Dark": "Light"}</label>
        {darkOn ?
          <DarkSwitch
            defaultChecked
            checked={darkOn}
            onChange={handleSwitchChange}
          />
        :
          <Switch
            defaultChecked
            color="default"
            checked={darkOn}
            onChange={handleSwitchChange}
          />
        }
      </div>
    </header>
  )
}

export default Header;