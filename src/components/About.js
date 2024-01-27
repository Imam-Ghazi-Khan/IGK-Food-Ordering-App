
import React, { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import './About.css'

class About extends Component{

  constructor(props){
    super(props);
    console.log("parent constructor");

  }

  componentDidMount(){
    //api calls
    //React first loads component then fetches API and fills the data, it does not wait for api to fetch and then load component.
    //That's why we use useEffect in functional component or componentDidMount() in class components
    console.log("parent component did mount");
  }

  componentWillUnmount(){
    console.log("Parent component did unmount");
  }

  componentDidUpdate(){
    console.log("Parent component did update");
  }

  render(){
    console.log("parent render");
    return (
      <div className="about-container">
        <div className="about-content">
          <h1>About IGK's FOODs</h1>
          <UserClass name={"Imam Ghazi Khan"}/>
          <p>
            Welcome to IGK's FOODs, your go-to destination for delicious and
            convenient food ordering. Our passion is to provide you with a seamless
            and enjoyable dining experience, right at your fingertips.
          </p>
         
        </div>
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         <h1>About IGK's FOODs</h1>
//         <UserClass name={"Imam Ghazi Khan"}/>
//         <p>
//           Welcome to IGK's FOODs, your go-to destination for delicious and
//           convenient food ordering. Our passion is to provide you with a seamless
//           and enjoyable dining experience, right at your fingertips.
//         </p>
       
//       </div>
//     </div>
//   );
// };

// export default About;


/** 
 * Parent Constructor
 * Parent Render
 * 
 *  First Child Contructor
 *  First Child Render
 * 
 *  Second Child Contructor
 *  Second Child Render
 * 
 * <DOM updated in Single Batch>
 *  First Child Component Did Mount
 *  Second Child Component Did Mount
 * 
 * Parent Component Did Mount
    
  *  First Child Render
  *  First Child Update(if updated)
  * 
  *  Second Child Render
  *  Second Child Update(if updated)

 * Parent Component Did Unmount
 * First Child Component Did Unmount
 * Second Child Component Did Unmount
*/