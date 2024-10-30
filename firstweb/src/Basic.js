import React , {useState} from "react"

function Basicform(){
    const [name,setname]=useState("")
    const [tnc,settnc]=useState(false)
    const [interest,setinterest]=useState("")
    function getformdata(e){
        console.warn(name,tnc,interest)
   e.preventDefoult()
    }
return (
    <div>
    <form onSubmit={getformdata}>
     <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}></input>
     <select onChange={(e)=>setinterest(e.target.value)}>
        <option>select option</option>
        <option>marvel</option>
        <option>dc</option>
     </select>
     <input type="checkbox"  onChange={(e)=>settnc(e.target.checked)}></input>
     <span>accept</span>
<br /><br />
     <button type="submit">submit</button>
    </form>
    </div>
)
}
export default Basicform