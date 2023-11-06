console.log("App js is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1",
    {
        id:"title",
        key:"h1"
    },
    "heading 1"
);

// above task is difficult and not convenient way to create elements so other way was introduced
//and pass elements in container as array which was tedious


// JSX => uses React.createElement => converted to JS object  => and converted to HTML DOM
// It has html like syntax but it is not hmtl in javascript
// Babel is the javascript compiler for next generation
// It parse the jsx format
const heading1 = (
<h1 id="title" key="h1">Namaste React</h1>
);

// React component
// Everything in react is component
// There are two components
// Functional - New way of writing code
// class Based Component - OLD way


// Functional component
const HeaderComponent = ()=>{
    return (<div>
        <h1>Namaste React Function component</h1>
        <h2>we are live</h2>
        </div>); //need to wrap in () when writing in multiple line
} ;
// as per JS syntax it is not mandatory to write return also
const HeaderComponent1 = ()=>{
    (<div>
        <h1>Namaste React Function component</h1>
        <h2>we are live</h2>
    </div>); //need to wrap in () when writing in multiple line
};

//we can also add JSX react elements in function component
const HeaderComponent2 =()=>{
    return (<div>
        {heading1}//{} can contain any javascript code and
        {console.log("hey")}// it will render it
        {1+3}
        <h2>Hello Cliche</h2>
    </div>);
};

// to add other function components in other function components
const HeaderComponent3 =()=>{
    return (<div>
        <HeaderComponent/>
        //another way is calling the function which returns JSX elements
        //so will use able paranthesis method
        {HeaderComponent2()}
        <h2> Hello Again.</h2>
    </div>);
};
//Naming convention is cap case BadAss 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);

//where rendering react elemet syntax is
// root.render(heading);

//and also rendering JSX as it also forms react object
// root.render(heading1);

//when we are rendering function compnents syntax is
root.render(<HeaderComponent />);

//root.render(<HeadingComponent2 />);
