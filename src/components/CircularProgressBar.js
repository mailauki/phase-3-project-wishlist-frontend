import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({ percentage, darkOn }) {
  const circularProgressBarColor = darkOn ? buildStyles({
    pathColor: "#dec300",
    trailColor: "#333",
    textColor: "#ccc",
  }) : buildStyles({
    pathColor: "#dec300",
    trailColor: "#ccc",
    textColor: "#333",
  })
  
  return (
    <div style={{width: 75, height: 75}}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={circularProgressBarColor}
      />    
    </div>
  )
}

export default CircularProgressBar;
