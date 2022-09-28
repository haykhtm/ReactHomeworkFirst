import { Component } from "react";


class Inputs extends  Component{
   constructor(props){
        super(props)
       
       this.change={
           maxAdd: 0,
           minSub: 0,
           step:0,
       }
   }
   handleInputAdd=(e)=>{
   this.change.maxAdd=e.target.value;
   this.props.updateData(this.change)
   
   }
  handleInputSub=(e)=>{
   this.change.minSub=e.target.value
   this.props.updateData(this.change)
   
  }

  handleStep=(e)=>{
   this.change.step=e.target.value
   this.props.updateData(this.change)
   
  }
   render(){
       
       return(
           <>
           <input placeholder="MaxValue" onChange={(e)=>this.handleInputAdd(e)} className="inputMax" type="number" />
           <input placeholder="MinValue" onChange={(e)=>this.handleInputSub(e)} className="inputMin" type="number" />
           <input placeholder="Step" onChange={(e)=>this.handleStep(e)} className="inputStep" type="number" />
           </>
       )
   }
}
export default Inputs
