function Clickevent() {
    let data="prince kumar";
    function apple(){
        data="rohan"
        //rohan name update sirf alert function me ho raha hai 
        //h1 tag me nahi ho raha hai----->change karne liye state or prob use karte hai
        
        alert(data)
    }
    return (
      <div className="App">
        <h1>{data}</h1>
      <button onClick={apple}>click me</button>
      {/* <button onClick={()=>{alert("hello")}}>click me</button> */}
   {/* arrow function apne aap call nahi hita hai */}
      </div>
    );
  }
  
  export default Clickevent;