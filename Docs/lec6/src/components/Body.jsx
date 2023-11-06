import * as Constants from "../constants.js";
import RestaurantDeconstructor from "./RestaurantCard.jsx";
import { useState } from "react"; //importing useState from react


/* 
what is hook
Hooks are nothing but js function
every hook has specific function to it
*/

/*
What is UseState ?
It is JS hook which is used to create state variables

What does UseState Return ?
It returns an array 
first variable is variable name
second parameter is setting function name
*/
function filterData(searchText,restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
  return filterData;
}
const Body = ()=>{
    let localVar = "ved";
    
    const [restaurants,setRestaurant] = useState(Constants.restaurantList);
    //state variable of restaurantlist create to update it when searched is preformed
    const [searchText,setSearchText] = useState("");//useState("ved"); //ved is default value of variable
    //usestate variable are tracked by react -- it will rerender UI when change in state of variables
    //normal state variables even after change does not rerender UI
    return (
      <>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="search" 
            value={searchText}
            onChange = {(e)=>{
              //searchText = e.target.value; //can't directly modify state variable
              setSearchText(e.target.value);
            }}
          />
          {
            // this line is parameter of inpput and onChange parameter looks for changes in the input and that changes is given to event e and can be passed to next call back function written.
            //onChange={(e)=>console.log(e)} //wher ever input is changed this function will be called and it has e event as parameter
            //onChange={(e)=>console.log(e.target.value)} //where ever input is changed this function will be called input value will be printed in console

            /*
            one more catch is there we can directy modify local variable of js 
            onChange={(e)=>{
              localVar = e.target.value; // it won't work
            }} 
            */
            
            /* 
            Need to create react variable
            every component in react maintains a state we can put all the variable to that state.
            
            */
          }
          <button 
            className="search-btn"
            onClick={()=>{
              //need to fiter the data
              const data = filterData(searchText,restaurants);
              // and update the restaurants state variable
              setRestaurant(data);

            }}
          >search</button>
        </div>
        <div className="restaurant-list">
            {
              restaurants.map((restaurant) => {
                return <RestaurantDeconstructor {...restaurant.data} key={restaurant.data.id}/>;
              })
            }
        </div>
      </>
    );
};

export default Body;