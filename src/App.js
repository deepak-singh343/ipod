import React from 'react';
import List from './List';
import ControlPad from './ControlPad';
import ZingTouch from 'zingtouch';
class App extends React.Component  {
      //handle the background-colors of the list while traversing the list 
      handleColor =()=>{
            let games = document.getElementById('games');
            games.style.backgroundColor='white';
            games.style.color="black";
            let music = document.getElementById('music');
            music.style.backgroundColor='white';
            music.style.color="black";
            let camera = document.getElementById('camera');
            camera.style.backgroundColor='white';
            camera.style.color="black";
            let videos = document.getElementById('videos');
            videos.style.backgroundColor='white';
            videos.style.color="black";
            let settings = document.getElementById('settings');
            settings.style.backgroundColor='white';
            settings.style.color="black";
      }
      // handle the scroll and change background color of the active list
      handleScroll = () => {
          let angle=0;
          var target = document.getElementById('outer-wheel');
          var region = ZingTouch.Region(target);
          region.bind(target, 'rotate',(e)=>{
                angle+= e.detail.distanceFromLast;
                //if angle is between 0 and 15 then change the background-color of list item from white to chrimson
                if((Math.floor(angle)>=0 && Math.floor(angle) <2)){
                    this.handleColor();
                    let selectedregion = document.getElementById('games');
                    selectedregion.style.backgroundColor='crimson';
                    selectedregion.style.color="white";
                }
                //if angle is between 15 and 30 then change the background-color of list item from white to chrimson
                if(Math.floor(angle) >2 && Math.floor(angle)<4){
                    this.handleColor();
                    let selectedregion = document.getElementById('music');
                    selectedregion.style.backgroundColor='crimson';
                    selectedregion.style.color="white";
                }
                //if angle is between 30 and 45 then change the background-color of list item from white to chrimson  
                if(Math.floor(angle) > 4 && Math.floor(angle)<6){
                    this.handleColor();
                    let selectedregion = document.getElementById('camera');
                    selectedregion.style.backgroundColor='crimson';
                    selectedregion.style.color="white";
                }
                //if angle is between 45 and 60 then change the background-color of list item from white to chrimson
                if(Math.floor(angle) >6 && Math.floor(angle)<8){
                    this.handleColor();
                    let selectedregion = document.getElementById('videos');
                    selectedregion.style.backgroundColor='crimson';
                    selectedregion.style.color="white";
                }
                //if angle is between 60 and 75 then change the background-color of list item from white to chrimson
                if(Math.floor(angle) >8 && Math.floor(angle)<10){
                    this.handleColor();
                    let selectedregion = document.getElementById('settings');
                    selectedregion.style.backgroundColor='crimson';
                    selectedregion.style.color="white";
                }
                if(Math.floor(angle) >10){
                    angle = 0;
                }        
          });
      }
      //handling the main screen element
      mainScreen =() =>{
          let current = document.getElementsByClassName('newScreen');
          
          let currentScreen="";

          for(currentScreen of current){
              if(currentScreen.style.visibility==="visible"){
                  break;
              }
          }    
          currentScreen.style.visibility = "hidden";
          currentScreen.style.height="0";
          currentScreen.style.width="0";

          let home = document.getElementById('display');
          home.style.visibility="visible";
          home.style.height="45%";
          home.style.width="90%";
          home.style.borderTopLeftRadius="3%";
          home.style.borderTopRightRadius="5%";
          home.style.marginTop="20px"

      }
      //handle switching the screens
      switchScreen = (e) =>{
          //when the screens are swittched hide the home screen 
          let home = document.getElementById('display');
          home.style.visibility="hidden";
          home.style.height="0";
          home.style.width="0";
          let screen = document.getElementById(e.id+'-screen');
          if(document.getElementById("title") != null){
              document.getElementById("title").remove();
          }
          let img = document.createElement('img');
          //if music is selected then show content related to music on new screen
          if(e.id==='music'){
              img.setAttribute("src", 'https://image.winudf.com/v2/image/Y29tLmlrb3JvbGtvdi5wb3dlcmFtcC5za2lucy5pY3Nfc2NyZWVuc2hvdHNfMF9mZDRkNmQwOQ/screen-0.jpg?fakeurl=1&type=.jpg');
          }
          //if games is selected then show content related to music on new screen
          else if(e.id==='games'){
              img.setAttribute("src", 'https://cdn.images.express.co.uk/img/dynamic/143/750x445/1140505.jpg');
          }
          //if camera is selected then show content related to music on new screen
          else if(e.id==='camera'){
              img.setAttribute("src", 'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.preview.jpg');
          }
          //if videos is selected then show content related to music on new screen
          else if(e.id==='videos'){
            img.setAttribute("src", 'https://www.ufusoft.com/image/guide/10/blu-ray-player-windows-7.jpg');
          }
          //if settings is selected then show content related to music on new screen
          else if(e.id==='settings'){
            img.setAttribute("src", 'https://www.maketecheasier.com/assets/uploads/2016/09/settings-app-not-working-featured.jpg');
          }
          img.id="title";
          img.style.height="100%";
          img.style.width="100%";
          screen.appendChild(img);
          screen.style.alignmentBaseline="center"
          screen.style.position="absolute"
          screen.style.visibility="visible";
          screen.style.height="45%";
          screen.style.width="85%" ;
          screen.style.borderRadius="3%";
          screen.style.marginLeft="15px";
      }

      //handling click
      Click =() =>{
          //get the items of the list 
          let elements = document.getElementsByClassName('list-item');
          let ele;
          for(ele of elements){                           //get the selected list item
              if(ele.style.backgroundColor==="crimson"){
                  break;
              }
          }
          this.switchScreen(ele);
      }

      render() 
      {
        return(<div className="App">
            <div className="ipod">
                <List/>
                <ControlPad scroll={this.handleScroll} mainScr={this.mainScreen} optn={this.Click}/>
            </div>
          </div>
        );
      }
}
//export App
export default App;
