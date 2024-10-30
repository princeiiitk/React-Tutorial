import React,{useState} from "react";
//react me variable use karne liye state use karte hai 
//state rerander karta hai data change karne par

function State() {
    //destrutureing
    //1 ke jagah par name bhi likh sikhata
    const [data,setData]=useState(1)
    // let data="prince kuamr";
    // function update(){
    //     data="rohan kumar"
    //     alert(data)
    // }
     function update(){
        setData(data+1)
       
    }
    return (
      <div className="App">

      <h1>{data}</h1>
      <button onClick={update}>upddate name</button>
      </div>
    );
  }
  
  export default State;