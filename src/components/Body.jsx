import * as Constants from "../constants.js";
import RestaurantDeconstructor from "./RestaurantCard.jsx";
import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import { filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
const Body = ()=>{
    
    
    const [allrestaurants,setAllRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

  
    useEffect(() =>{
      console.log("api call");
      getRestaurants();
    },[]); 

    async function getRestaurants(){ 
        const json = await fetch(Constants.SWIGGY_API).   then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        }).catch(err=>{
        console.log(err)
      });
      // const json = await data;
      console.log(json);
      // setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!useOnline()){
      return <h1>Please check your internet connection</h1>
    }

    if(!allrestaurants) return null; 

    console.log("render");
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
                  <RestaurantDeconstructor {...restaurant.data}/>
                  </Link>)
                })
            }
        </div>
      </>
    );
};

export default Body;