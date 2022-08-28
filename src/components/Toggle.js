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
        <>
        <h1>{this.state.flag ? "marco" : "polo" }</h1>
        
        <button onClick={toggle}> {this.state.flag ? "polo"  : "marco"} </button>
        </>
    )
  }
}


export default Toggle;