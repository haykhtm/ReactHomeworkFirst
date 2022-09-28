import { Component } from "react";
import Inputs from "./Inputs";

class Counter extends Component{
  constructor(){
    super()
    
    console.log(localStorage.getItem("save")==='undefined')
    if (localStorage.getItem("save")!=='undefined') {
       var result=JSON.parse(localStorage.getItem("save"))
       console.log(result);
    }
   
    
    this.state={
        value:0,
        maxAdd:10,
        minSub:-10,
        step:1,
    }
    
    if (result) {
        this.state=result
    }
  }
 
  componentDidUpdate(){
    this.setStorage()
  }
  setStorage(){
    localStorage.setItem("save", JSON.stringify(this.state))
  }

 handleAdd=()=>{
  const{state:{value,step,maxAdd}}=this
  if (value<maxAdd) {
   
    this.setState({
    
        value:value+(+step)
        
      })
      
  }
 
 }
 handleSub=()=>{
    const{state:{value,step}}=this
    this.setState({
        value:value-(+step)
    })
    
 }

 handleReset=()=>{
    // const{state:{value}}=this
    this.setState({
        value:0
    })
    
 }
updateData=(obj)=>{
// const{state:{maxAdd,minSub,step}}=this

this.setState({
    maxAdd:obj.maxAdd,
    minSub:obj.minSub,
    step:obj.step
})

}

render(){
    
    
    const{state:{value,maxAdd,minSub,step}}=this
    
    return(<>
   
        <div>counter={value}</div>

        <button disabled={value+(+step)<=maxAdd?false:true}  onClick={this.handleAdd}>+</button>
        <button disabled={value-step>=minSub?false:true} onClick={this.handleSub}>-</button>
        <button onClick={this.handleReset}>reset</button>
        <div><Inputs  updateData={this.updateData} /> </div>
        </>
    )
}
    
}



export default Counter