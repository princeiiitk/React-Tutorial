import React,{useState} from 'react'


function If_else(){
    const [loggedin,setloggedin]=useState(true)
    const [loggedin1,setloggedin1]=useState(2)
    // if(loggedin){
        return (
    //         <div>
    //             <h1>hello prince i am in if condition</h1>
    //         </div>
    //             )
    // }
    // else{
    //     return (
    //         <div>
    //             <h1>else condition</h1>
    //         </div>
    //             )
    // }
        




    //all if else code in one line
    <div>
    {
        loggedin1==1?
        <h1>welcome prince</h1>
        :loggedin1==2?<h1>welcome guest</h1>
        :<h1>welcome user</h1>
    }    
    
    </div>
    
    
    )
}
export default If_else;