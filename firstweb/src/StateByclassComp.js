import React,{Component} from "react";
class App extends Component{
    constructor(){
        super();
   this.state={
     data:"prince"
   }
    }
    name(){
        this.setState({data:"pppp"})
    }

    render(){
        return (
            <div classname="App">
                <h1>{this.state.data}</h1>
                <button onClick={()=>{this.name()}}>update data</button>
            </div>
        )
    }
}
export default App;