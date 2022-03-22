import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import './styles/Sort.css';

function Sort({ sort, onSortChange, darkOn, DarkToggleButtonGroup }) {
  return (
    <div className="Sort">
      <p>Sort by: </p>
      {darkOn ?
        <DarkToggleButtonGroup exclusive value={sort} onChange={onSortChange}>  
          <ToggleButton value="price">Price</ToggleButton>
          <ToggleButton value="priority">Priority</ToggleButton>
        </DarkToggleButtonGroup>
      :
        <ToggleButtonGroup exclusive value={sort} onChange={onSortChange}>
          <ToggleButton value="price">Price</ToggleButton>
          <ToggleButton value="priority">Priority</ToggleButton>
        </ToggleButtonGroup>
      }
    </div>
  )
}

export default Sort;