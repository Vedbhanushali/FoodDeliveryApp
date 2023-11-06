# Lec 8

## Micro service

1 project contains everything - everything contained in one project  
monolith project  

micro service contains of small small different projects running on different ports which are independent of each other  
UI project  
backend API project  
notification project  
logs project  
authentication project  

easy to maintain and separation of concern  

Big company uses different tech stack and they are integrated  

## Fetch  

javascript function to call API  
where to call this API and how to call it ?  

sol -> if we call in body for every small state change it will call render and call API every time

to fix this -> call API in body one at start of loading website

there are two ways of doing this :

1) page loads - call api (300ms) -> render page (200ms) - total 500 ms and page will be available.

2) page loads -> render page (200ms) - call API (300ms) -> udpate UI - total 500 ms and page will be available after 200 ms

2 way is much more efficient and user friendly

## useEffect

to perform 2 way of calling API we have to use useEffect which is a function which takes callback function and dependencies array

useEffect call this call back function whenever there is rerender on state changes or prop changes

dependencies array - contains state variables whenever they are changed useEffect will be called.  

To achieve one time call of API when user loads the page we can pass empty dependecy array mean it will not be called again and again during rerender.  

empty dependecy array once after render
dependencies array contains state variable - once after initial render + evertime after rerender (my state variable changes)

## API call

using async function we call this API
browser doesn't support call from local host to swiggy api so need to install allow cors access control aloow origin plugin for browser

## Shimmer UI

creating blank boxes where data will be loaded for better UX.  
This is achieved using conditional rendering.  
// if restaurant is empty => shimmer UI
// if restaurant has data => render actual data  
