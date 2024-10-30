import React  from "react";
class Render1 extends React.Component{
render(data1){
    console.log("updata method")
    return (
        <div>
            <h1>user componenet {this.props.data1}</h1>
        </div>
    )
}
}
export default Render1;