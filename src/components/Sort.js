import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import './styles/Sort.css';

function Sort({ sort, onSortChange, darkOn, DarkToggleButtonGroup }) {
  // const DarkToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  //   '& .MuiToggleButtonGroup-grouped': {
  //     borderColor: "#555",
  //     '&:not(:first-of-type)': {
  //       color: "#ccc",
  //     },
  //     '&:first-of-type': {
  //       color: "#ccc",
  //     },
  //     '&:hover': {
  //       backgroundColor: "rgba(60, 60, 60, 0.5)"
  //     },
  //     '&.Mui-selected': {
  //       backgroundColor: "rgba(60, 60, 60, 0.5)",
  //       color: "#e0e0e0",
  //     },
  //     '&.Mui-selected:hover': {
  //       backgroundColor: 'rgba(60, 60, 60, 0.8)'
  //     },
  //   },
  // }))

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