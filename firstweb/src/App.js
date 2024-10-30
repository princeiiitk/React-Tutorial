import logo from './logo.svg';
import './App.css';
import FirstcodeReact from './FirstcodeReact';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import JSX from './JSX';
import Clickevent from './Clickevent';
import State from './State';
import StateByclassComp from './StateByclassComp'
import PropsWithFunctionalC from './PropsWithFunctionalC';
import React,{useState} from "react";
import PropsWithclassC from './PropsWithclassC';
import Inputbox from './Inputbox'
import Hide_show from './Hide_show';
import Basic from './Basic';
import If_else from './If_else';
import Functionpass from './Functionpass';
import Render1 from './Render1';
import  Comp_didMount from './Comp_didMount';
import Comp_did_upd from './Comp_did_upd';
import Hooks from './Hooks';
import Useeffact from './Useeffact';
import Use_eff_prop from './Use_eff_prop';

function App() {
  const [data1,setdata1]=React.useState("prince");
  const [name1,setName1]=useState("prince")
  const [name2,setName2]=useState("yug")
  const [name3,setName3]=useState("tusar")
  function getdata(){
    alert("hii prince")
  }


  return (
    <div className="App">
    <h1>hello world</h1>
         {/* <App /> */}
    {/* <FirstcodeReact></FirstcodeReact> */}
    {/* <FunctionalComp></FunctionalComp> */}
    {/* <ClassComp></ClassComp> */}
    {/* <JSX></JSX>  */}
    {/* <Clickevent></Clickevent> */}
   {/* <State></State> */}
    {/* <StateByclassComp></StateByclassComp> */}






    {/* probs  with functional component*/}
    {/* <PropsWithFunctionalC name={name1} email="pspkssm7@gmail.com" other={{address:"bihar"}} ></PropsWithFunctionalC>
    <PropsWithFunctionalC name={name2} email="pspkssm7@gmail.com" other={{address:"bihar"}}  ></PropsWithFunctionalC>
    <PropsWithFunctionalC name={name3} email="pspkssm7@gmail.com" other={{address:"bihar"}} ></PropsWithFunctionalC>
    <button onClick={()=>{setName1("vishal")}}>clickme</button>
    <button onClick={()=>{setName2("sunny")}}>clickme</button>
    <button onClick={()=>{setName3("ravi")}}>clickme</button> */}




    {/* props with class component */}
   {/* <PropsWithclassC name={name1}></PropsWithclassC>
    <button onClick={()=>{setName1("anjali")}}>update</button> */}

   



{/* inputbox */}
{/* <Inputbox></Inputbox> */}






{/* hide and show */}
{/* <Hide_show></Hide_show> */}



{/* basic form */}
{/* <Basic></Basic> */}



{/* if else */}
{/* <If_else></If_else> */}





{/* function pass */}


{/* <Functionpass data={getdata} ></Functionpass> */}




{/* construction life cycle ---->render life cycle (class componenet */}
{/* <Render1 data1={data1}></Render1>
<button onClick={()=>{setdata1("sunny")}}>update</button> */}





{/* componenetdid mount method */}
{/* <Comp_didMount></Comp_didMount> */}



{/* componenetdidupdata method */}
{/* <Comp_did_upd></Comp_did_upd>  */}




{/*shouldcomponenetupdate method or life cylce  */}
{/* <ShouldCompUpd></ShouldCompUpd> */}



{/* hook */}
{/* <Hooks></Hooks> */}






{/* useeffect */}
{/* <Useeffact></Useeffact> */}




{/* useeffact with props */}
<Use_eff_prop></Use_eff_prop>

    </div>
  );
}

export default App;
