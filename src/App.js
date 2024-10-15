import React from "react";
import axios from "axios";
// import Flex from "./Flex";
import Save from "./Event";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      name:"dhanu"
    };

  }

  componentDidMount() {
    // console.log("called didmount")
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts" )
      .then(response => {
        var postresponse = response.data;
        // console.log(postresponse, "post")
        this.setState({posts:postresponse}
        )
      })
  }
   handleClick(){
    this.setState({
      name:"dhanushiya"
    
    })
  }
  
  render() {
    return(
    <>
        {/* <button style={{color:"red"}} onClick={this.handleClick.bind(this)}>click</button>
        
        <h2>{this.state.name}</h2>  */}
        <Save />
           {/* <Flex /> */}

      
      </>
    )
    
  }
}
