import React from 'react';
const List=()=>
{
    return(                   //return list of items to be displayed on the home screen
       <div>
               <div className="list-container" unselectable="off" id="display">
                <ul>
                    <li className="list-item" id="games">
                         <img className="icons"src="https://image.flaticon.com/icons/svg/686/686589.svg" alt="game" height="15px" width="15px"/>
                         <span className="options">
                            Games
                         </span>
                    </li>
                    <li className="list-item" id="music">
                         <img className="icons"src="https://image.flaticon.com/icons/svg/937/937363.svg" alt="game" height="15px" width="15px"/>
                         <span className="options">
                            Music
                         </span>
                    </li>
                    <li className="list-item" id="camera">
                         <img className="icons"src="https://image.flaticon.com/icons/svg/2088/2088898.svg" alt="game" height="15px" width="15px"/>
                         <span className="options">
                            Camera
                         </span>
                    </li>
                    <li className="list-item" id="videos">
                         <img className="icons"src="https://image.flaticon.com/icons/svg/1159/1159798.svg" alt="game" height="15px" width="15px"/>
                         <span className="options">
                            Videos
                         </span>
                    </li>
                    <li className="list-item" id="settings">
                         <img className="icons"src="https://image.flaticon.com/icons/svg/675/675528.svg" alt="game" height="15px" width="15px"/>
                         <span className="options">
                            Settings
                         </span>
                    </li>  
                </ul>  
            </div>
            <div id="music-screen" className="newScreen"></div>
            <div id="games-screen" className="newScreen"></div>
            <div id="camera-screen" className="newScreen"></div>
            <div id="videos-screen" className="newScreen"></div>
            <div id="settings-screen" className="newScreen"></div>
       </div>
        
    );
}
//export List 
export default List;