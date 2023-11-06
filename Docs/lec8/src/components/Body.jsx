import * as Constants from "../constants.js";
import RestaurantDeconstructor from "./RestaurantCard.jsx";
import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer.jsx";

function filterData(searchText,restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}
const Body = ()=>{
    
    // const [restaurants,setRestaurant] = useState(Constants.restaurantList);
    const [allrestaurants,setAllRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    // API call
    useEffect(() =>{
      //api call
      console.log("api call");
      // fetch(Constants.SWIGGY_API);
      // can't call directly using fetch need to use async function
      getRestaurants();
    },[]); //empty dependency array so that only call one time at load of page

    async function getRestaurants(){
      //this is example but in reality browser doesn't support call from local host to swiggy api 
      const data = await fetch(Constants.SWIGGY_API);
      //data returns a readable stream need to convert to json format
      const json = await data.json();
      console.log(json);
      //optional chaining
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log("render");

    if(!allrestaurants) return null; // no restaurants found

    // if(filteredRestaurants?.length === 0)
    //   return( <h1>No restaurants found</h1>);


    //conditional rendering
    // if restaurant is empty => shimmer UI
    // if restaurant has data => render actual data
    return (allrestaurants.length === 0) ? (<Shimmer />):
    (
      <>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="search" 
            value={searchText}
            onChange = {(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button 
            className="search-btn"
            onClick={()=>{
              const data = filterData(searchText,allrestaurants);
              setFilteredRestaurants(data);
            }}
          >search</button>
        </div>
        <div className="restaurant-list">
            {
              //only JS expression works here not JS statements
              // This will not work
              // let a =10;
              // console.log(a);
              //this will also not work
              // if(filteredRestaurants?.length === 0)
              //   return <h1>No restaurants found</h1> 
              // else 
              // filteredRestaurants.map((restaurant) => {
              //   return <RestaurantDeconstructor {...restaurant.data} key={restaurant.data.id}/>;
              // })
                
              filteredRestaurants?.length == 0 ? (<h1>No restaurants found</h1>) : filteredRestaurants.map((restaurant) => {
                  return <RestaurantDeconstructor {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
      </>
    );
};

export default Body;