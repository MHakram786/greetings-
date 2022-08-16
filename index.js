import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const cdate = new Date().toLocaleDateString();
const ctime = new Date().toLocaleTimeString();
let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';
const cssStyle = {};
if (currDate >= 1 && currDate < 12){
  greetings = "GOOD MORNING";
  cssStyle.color = "skyblue";
}
else if(currDate >= 12 && currDate < 19){
  greetings = "GOOD EVENING";
  cssStyle.color = "orange";
}
else{
  greetings = "GOOD NIGHT";
  cssStyle.color = "#ffff";
}

ReactDOM.render(
<>
  <h1>Hellow sweet heart, <span style={cssStyle}>{greetings}</span></h1>
  <p><b>the date is {cdate}</b></p>
  <p><b>the time is {ctime}</b></p>
</>
,document.getElementById('root')
);