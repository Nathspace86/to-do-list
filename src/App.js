
import './App.css';
import { Component } from "react";
import { Spisok } from './Spisok';
import image from './1.jpg'


function App() {
  
    return (
      <div className='box'>
      <div className='container'>
        <div className='picture'>
          <img src={image} width="200px" alt="foto"/>
        </div>
<div className='title'>
  <h1>Список дел</h1>
</div>
<div className='inputText'>
<Spisok/>
</div>
      </div>
      </div>
      
    )


  
}


export default App;
