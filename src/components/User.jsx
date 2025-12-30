import { Component } from "react";


  class User extends Component {  
    
       constructor(props){
          super(props)

          this.state = {
             count:0,
             age:21,
             name:"test"
          }          
          
          console.log("constructor is called");
          
        } 


        async componentDidMount(){
         const res =   await fetch("https://jsonplaceholder.typicode.com/users")
         const json = await res.json()
         console.log("componentDidMount is called");
         console.log(json);
        }

        componentDidUpdate(){
            console.log("component did update called");
        }

        componentWillUnmount(){
            console.log("component is unmounted");
        }

        render() {
         const {name,age} = this.props
         const {count} = this.state

         console.log("render is called");
         

        return(
             <div>
                 {/* <button> {name} </button>
                 <p> {age} </p> */}
                 <button onClick={()=> {
                    //  this.state.count = this.state.count+1
                    this.setState({
                        count:this.state.count+1
                    })
                     console.log(this.state.count);
                 }}>
                     {this.state.count}
                 </button>
             </div>
        )
     }

  }


  export default User;