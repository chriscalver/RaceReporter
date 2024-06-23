import React, {useState, useEffect} from 'react'
import "./Progressbar.css";


export default function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	useEffect(() => {
		if (filled < 80 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 80)
		}
	},[filled, isRunning])
  return (
	  <div className="ggg">
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#B1312A",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
              
		  </div>
		  
	</div>
  )
}