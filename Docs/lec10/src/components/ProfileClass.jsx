//class components syntax same as Profile.jsx functional component
// extends React component because this is not normal JS class it is react class
import React from 'react';
class Profile extends React.Component {

    //class has constructor which is used for initialization this is the place where we will create state variables
    constructor(props) {
        super(props); //what is need ? HW
        //create state
        this.state = {
            count: 0, //here count is state variable
            count2: 0,
            userInfo: {
                name: "dummy",
                location: "dummy"
            }
        };
        console.log("child constructor");
    }
    //render method is most important in class base components
    async componentDidMount(){ //HW why async ?
        //Here we can create componentDidMount as async function but in functional components useEffect we cannot pass async function we have to call async function from the parameter function.

        //API calls
        const data = await fetch("https://api.github.com/users/VedBhanushali");
        const json = await data.json();
        this.setState({
            userInfo : json
        });
        console.log("child componentDidMount");

        //when we load this component lets have an setInterval which will call back function every 1 sec
        /* code commented just for explanation */
        this.timer = setInterval(() => {
            console.log("Namaste Ved");
        },1000);
        
        //issue with Single page application it is still calling because we are not reloading the page.
        //This needs to be clean up which is performed in componentWillUnmount
    }

    componentDidUpdate(prevProps,prevState){
        // This Method is used in place of tracking state variables which used to
        // be in dependency array of useEffect functional component 
        if( this.state.count != prevState.count||
            this.state.count2 != prevState.count2){
                //do something 
            }
        //will be called after api call and rerender
        console.log("child componentDidUpdate");
    }
    componentWillUnmount(){
        // This is used for clean up
        // This will be called when leaving component 
        // so How we will refer setinterval function from componentDidMount ?
        // This will shared between all functions of this class.
        
        /* code commented just for explanation */
        clearInterval(this.timer);
        console.log("child componentWillUnmount");
    }
    render(){
        console.log("child render method");
        //this returns some JSX
        //deconstructing
        const {count2} = this.state;
        return(
            <>
            <h1>Profile Class component</h1>
            {
                //getting props in class components
            }
            <h2>Name : {this.props.name}</h2>
            <h3>Count : {this.state.count}</h3>
            <h3>-------This is API call--------</h3>
            <img src={this.state.userInfo.avatar_url} />
            <h3>Name : {this.state.userInfo.name}</h3>
            <h3>location : {this.state.userInfo.location}</h3>
            <button onClick={()=>{
                // we don't mutate the state directly here like
                //this.state.count = 1;
                this.setState({
                    count: 1
                });
            }} >click</button>
            <h3>Count : {count2}</h3>
            </>
        )
    }
}
export default Profile;
//React lifeCycle
/*
1) Constructor is called
2) Render is called
*/

/* In class based component
API call
componentDidMount() this function will be called after render
so sequence of operation becomes
1) Constructor is called
2) render is called
3) componentDidMount
*/

/* if there are multiple children in class based component then order of execution lifecycle is:
1) Parent Constructor
2) Parent Render
    First Child constructor
    First child Render
    second child constructor
    second child render
    first child componentDidMount
    second child componentDidMount
3) Parent componentDidMount
*/

/*
React Mount lifecycle two phases
1) Render phase
    constructor
    render
2) Commit phase
    rect updates DON and refs
    componentDidMount
*/

/* React class component lifecycle
Parent constructor
Parent Render
    Child constructor
    child render
    child componentDidMount

    API call
    set State

    <Update lifecycle
    child render again
    componentDidUpdate

    and when we will leave the DOM (mean change the DOM/move to new screen)
    componentWillUnmount will be called
Parent componentDidUnmount
*/