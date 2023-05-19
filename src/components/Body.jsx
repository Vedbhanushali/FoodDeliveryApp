import * as Constants from "../constants.js";
import RestaurantDeconstructor from "./RestaurantCard.jsx";
import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";

function filterData(searchText,restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}
const Body = ()=>{
    
    
    const [allrestaurants,setAllRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

  
    useEffect(() =>{
      console.log("api call");
      getRestaurants();
    },[]); 

    async function getRestaurants(){ 
      const data = await fetch(Constants.SWIGGY_API);
      const json = await data.json();
      // console.log(json);
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log("render");

    if(!allrestaurants) return null; 

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
              filteredRestaurants?.length == 0 ? (<h1>No restaurants found</h1>) : filteredRestaurants.map((restaurant) => {
                  return( 
                  <Link 
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                  >
                  <RestaurantDeconstructor {...restaurant.data}/>342
                  </Link>)
                })
            }
        </div>
      </>
    );
};

export default Body;