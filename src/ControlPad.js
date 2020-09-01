import React from 'react';
import './index.css';
const ControlPad=(props)=>{
    return(                 //return the control pad
        <div>
            <div id="outer-wheel" className="controls" onMouseOver={props.scroll}>
                    
                    <img id="forward"src="https://image.flaticon.com/icons/svg/106/106105.svg"alt="forward"/>
                    <img id="backward"src="https://image.flaticon.com/icons/svg/18/18603.svg" alt="backward"/>
                    <img id="next"  src="https://cdn.onlinewebfonts.com/svg/img_497120.png" alt="next"/>
                </div>   
                <button className="Menu" onClick={props.mainScr}>Menu</button>
                <div className="inner-wheel" >
                    <button id="ok" onClick={props.optn}>OK</button>
                </div> 
        </div>
                 
    )
}
export default ControlPad;