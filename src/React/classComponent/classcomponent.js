import axios from "axios";
import { Component } from "react";

class Classcomponent extends Component{
    constructor(){
          super();
          this.state={
            text:"hello",
            data:[]
          }
    }
    change(){
        this.state.text==="hello"?this.setState({text:"welcome"}):this.setState({text:"hello"})
    }
    load(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            this.setState({data:res.data})})
            console.log(this.state.data)
    
    }
 render(){
    return <div >
        <h1>{this.state.text}</h1>
        <button style={{margin:"2% 0"}} onClick={()=>this.change(this)}>change</button>
        <button style={{margin:"2% 0"}} onClick={()=>this.load(this)}>load</button>
        {
         this.state.data.map(e=>{return <h1>{e.name}</h1>})
        }
    </div>
 }
}
export default Classcomponent