import {useEffect, useState} from 'react';
const Profile = (props) => {
    const [count,setCount] = useState(0);
    const [count2] = useState(0);

    useEffect(()=>{
        //API call

        //when we load this component lets have an setInterval which will call back function every 1 sec
        /* code commented just for explanation */
        const timer = setInterval(() => {
            console.log("Namaste Ved");
        },1000);
        
        //issue with Single page application it is still calling because we are not reloading the page.
        //This needs to be clean up which is performed in a return function in useEffect
        return () => {
            //this function will be called when we  leave this component just like componentwillunmount
            clearInterval(timer);
            console.log("UserEffect returns");
        };
    },[]);

    

    return (
        <div>
            <h1>Profile section</h1>    
            <h2>Name : {props.name}</h2>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count+1)} >click</button>
            <h3>Count : {count2}</h3>
        </div>
    )
};

export default Profile;

//in functional component
// API call are made using useEffect which are called after render
//render default state - fetch data - render again