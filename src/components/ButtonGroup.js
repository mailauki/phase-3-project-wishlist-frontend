import './styles/Button.css';

function ButtonGroup({ handleDelete, handleEdit }) {
  return (
    <div className="ButtonGroup">
      <button className="button" onClick={handleDelete}>X</button>
      <button className="button" onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default ButtonGroup;
