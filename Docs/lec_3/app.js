console.log("App js is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1",
    {
        id:"title",
        key:"h1"
    },
    "heading 1"
);
//here key is important as it act as unique key which is used to identify elements for React, It makes react job easy to rerender when there are multiple childrens
const heading2 = React.createElement(
    "h2",
    {
        id:"title",
        key:"h2"
    },
    "heading 2"
);
const container =  React.createElement(
    "div",
    {
        id:"container",
        key:"container"
    },
    [heading1,heading2]
)
// need to pass elements as array 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);