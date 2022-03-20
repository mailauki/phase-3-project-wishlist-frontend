import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(percentage) {
  const percent = percentage.percentage
  
  return (
    <div style={{width: 75, height: 75}}>
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          pathColor: "#DEC300",
          trailColor: "#CCC",
          textColor: "#333",
        })}
      />    
    </div>
  )
}

export default CircularProgressBar;
