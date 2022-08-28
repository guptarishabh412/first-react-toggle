import React from "react";

class Toggle extends React.Component{
constructor(){
    super();
    this.state = {
        flag:true
    }
}

render(){
    const toggle=()=>{
    this.setState({
        flag: !this.state.flag
    })
    };
    return(
//         Create an h1 with id="marco-polo" which initially displays "Marco"
// and a button with id="marco-polo-toggler" which initially displays "Polo"
// inside the button.
        <>
        <h1 id = "marco-polo">{this.state.flag ? "marco" : "polo" }</h1>
        
        <button id = "marco-polo-toggler" onClick={toggle} > {this.state.flag ? "polo"  : "marco"} </button>
        </>
    )
  }
}


export default Toggle;