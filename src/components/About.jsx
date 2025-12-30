import React, { Component } from 'react'
import User from './User'


    class About extends Component { 
 
       constructor() {
        super()

       }

     componentDidMount(){
      console.log("componentDidMount of about page is called ");
     } 

  render() {
    console.log("render of about is called");
    return (
      <div>
         <User name={"raghav"} age={21} />
      </div>
    )
  }
}


export default About;
