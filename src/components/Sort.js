import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import './styles/Sort.css';

function Sort({ sort, onSortChange }) {
  return (
    <div className="Sort">
      <p>Sort by: </p>
      <ToggleButtonGroup exclusive value={sort} onChange={onSortChange}>
        <ToggleButton value="price">Price</ToggleButton>
        <ToggleButton value="priority">Priority</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Sort;