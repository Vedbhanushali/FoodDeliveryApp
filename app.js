console.log("App js is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "heading 1"
);
const heading2 = React.createElement(
    "h2",
    {
        id:"title",
    },
    "heading 2"
);
const container =  React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]
)
// need to pass elements as array 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);