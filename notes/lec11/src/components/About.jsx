import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileClass from './ProfileClass';
import ProfileFun from './Profile';

// This is Functional component and below writing class component same as this
const About = () => {
  return (
    <div>
        <p>
        About us page
        </p>
        <Outlet /> 
        {  
          //here profile is children of about component so when we go to the path about/profile then profile will be rendered in outlet component
        }
        <ProfileClass />{
          //profile class component is same as profile functional component 
        }

        {
          // passing props in functional and class components
        }
        {
          //functional example
          //here name is passed as prop
        }
        <ProfileFun name={"Ved"} />
        <ProfileClass name={"Ved"} />
    </div>
  );
};


// class About extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userInfo : {
//         name : "dummy",
//         location : "dummy", 
//       }
//     }
//   }

//   async componentDidMount(){
//     const data = await fetch();
//     const json = await data.json();
//     this.setState({
//       userInfo: josn
//     });
//     console.log("componentDidmount");
//   }
//   render(){
//     console.log("render");
//     return (
//       <div>
//           <p>
//           About us page
//           </p>
//           <Outlet /> 
//           {  
//             //here profile is children of about component so when we go to the path about/profile then profile will be rendered in outlet component
//           }
//           <ProfileClass />{
//             //profile class component is same as profile functional component 
//           }

//           {
//             // passing props in functional and class components
//           }
//           {
//             //functional example
//             //here name is passed as prop
//           }
//           <ProfileFun name={"Ved"} />
//           <ProfileClass name={"Ved"} />
//       </div>
//     );
//   }
// }

export default About;