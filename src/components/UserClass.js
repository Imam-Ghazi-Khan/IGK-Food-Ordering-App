import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            emailNumber: 0,
            userInfo:{
                name:"Imam Ghazi Khan",
                email:"igkhan1710@gmail.com"
            }
        };
        console.log(this.props.name + " child Constructor");

    }

    async componentDidMount(){
        //API CALLS
        const data = await fetch("https://api.github.com/users/imam-ghazi-khan");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
        // this.timer = setInterval(()=>{
        //     console.log("use effect calling")
        // },1000);
    }

    componentWillUnmount(){
        console.log(this.props.name + " child component did unmount");
        // clearInterval(this.timer);
    }

    componentDidUpdate(){
        console.log(this.props.name + " child component did update");
    }

    render(){
        console.log(this.props.name + " child render");
        const {userInfo,emailNumber} =  this.state;
        var {name,email} = userInfo;
        if(name==null) name = "Imam Ghazi Khan";
        if(email==null) email = " igkhan1710@gmail.com";
        
        return (
            
        <div>
            <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2>Logged-in User : <span>{loggedInUser}</span></h2>
            )}
          </UserContext.Consumer>
            <h2>Developed by: {name}</h2>
            <p>Email:{email}</p>
            <button className="px-4 py-2 bg-blue-100 m-4 rounded-lg" onClick={()=>{
                if(emailNumber==0){
                    this.setState({userInfo : {email:" cse2020070@rcciit.org.in"},emailNumber:1});
                }
                else{
                    this.setState({userInfo : {email:" igkhan1710@gmail.com"},emailNumber:0});
                }
            }}>Show Different Email</button>
        </div>
        )
    }
}

export default UserClass;