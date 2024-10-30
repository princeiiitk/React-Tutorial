import logo from './logo.svg';
import './App.css';
import React from 'react'
import Student from './Student';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      show:true
    }
  }
  
  
  render() {
    return (
    <div className="App">
    {
      this.state.show ? <Student/>:<h1>child component romove</h1>
    }
   <button onClick={()=>{this.setState({show:!this.state.show})}}> toggle child Component</button>
        
     </div>)
    
          }
  }
export default App;
