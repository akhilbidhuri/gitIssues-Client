import React from 'react';
import Git from './github.png'
import './App.css';
import Input from './Components/input';
import Results from './Components/results';
function App() {
  return (
    <div className="App">
      <h1 className="heading"><img src={Git} style={{height:'3%', width:'3%'}}/><span style={{color:'#3d75c3'}}>git</span><span style={{color:'#f9575c'}}>Issues</span></h1>
      <Input/>
      <Results/>
    </div>
  );
}

export default App;
