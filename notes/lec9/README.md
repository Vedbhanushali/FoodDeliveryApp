# Lec 9

## CDN  

cdn is best place to store images  

## Browser Routing

How to move from one page to another  
we will be using npm package called react-router-dom  
using createBrowserRouter

## Single page application

our application doesn't need to reload only few components changes

## Types of routing

client side routing (new - React) - loading different components which is already done present in web application when loaded first time
server side routing (old) - all pages comes from server fetching all data

## client side routing

using link component from react-router-dom

## About section  

creating about section such a way that header and footer remains same just body is replaced with about in app.js  
then create about as children in applayout component and  

### Outlet  

React router dom provides outlet which is a component which will be filled by children configuration. all the children will be going in outlet accourding to the route.  

## Dynamic routing

mean when we click on restaurant card it dynamically opens
/restaurant/:id where id is dynamic name according to the restaurant card clicked.  

### useParams

react router dom hooks which allows us to capture id/argument which is passed in url
