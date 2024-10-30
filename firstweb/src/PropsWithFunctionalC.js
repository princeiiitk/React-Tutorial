//functional component
function PropsWithFunctionalC(prop){
    return (
        <div style={{backgroundColor:"skyblue",textAlign:"center"}}>
        <h1>hello {prop.name} and email is</h1>
        <h2>{prop.email}</h2>
        <h3>adress {prop.other.address}</h3>
   
        
        </div>
    )
};

export default PropsWithFunctionalC;