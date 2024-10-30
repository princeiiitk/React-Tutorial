import React ,{useState} from "react"
function Inputbox(){
    const [data,setname]=useState(null)
    const [print,setprint]=useState(false)
    function getdata(v){
        setname(v.target.value)
    }
    return (
        <div>
           {
           print?
           <h1>{data}</h1>
           :null
          }
         
            <input type="text" onChange={getdata}></input>
            <button onClick={()=>{setprint(true)}}>printdata</button>
        </div>
    )
}
export default Inputbox;