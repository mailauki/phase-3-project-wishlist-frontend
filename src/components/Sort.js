import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import './styles/Sort.css';

function Sort({ sort, onSortChange, darkOn, DarkSortToggleButtonGroup, LightSortToggleButtonGroup }) {
  return (
    <div className="Sort">
      <p>Sort by: </p>
      {darkOn ?
        <DarkSortToggleButtonGroup exclusive value={sort} onChange={onSortChange}>  
          <ToggleButton value="price">Price</ToggleButton>
          <ToggleButton value="priority">Priority</ToggleButton>
        </DarkSortToggleButtonGroup>
      :
        <LightSortToggleButtonGroup exclusive value={sort} onChange={onSortChange}>
          <ToggleButton value="price">Price</ToggleButton>
          <ToggleButton value="priority">Priority</ToggleButton>
        </LightSortToggleButtonGroup>
      }
    </div>
  )
}

export default Sort;