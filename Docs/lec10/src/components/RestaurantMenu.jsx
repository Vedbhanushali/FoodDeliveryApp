import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
// import { SWIGGY_RES_MENU } from "../constants";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
// allows us to capture id/argument which is passed in url
const RestaurantMenu = () =>{
    const params = useParams();
    console.log(params);
    //deconstructing on fly
    const {resId} = useParams();
    console.log("while rendering params",resId);
    const [restaurant,setRestaurant] = useState(null); 
    const [restaurantMenu,setRestaurantMenu] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        console.log("params",resId,"type:",typeof resId);
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2419997&lng=69.6669324&restaurantId="+resId+"&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);//returns array
    }

    return (!restaurant) ? <Shimmer />:
        (
        <>
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>Welcome to {restaurant.name}</h2>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}></img>
            <h3>Area Name : {restaurant.areaName}</h3>
            <h4>Average Rating : {restaurant.avgRating}</h4>
            <h2>Menu : {console.log(typeof restaurantMenu)}</h2>
            <ul>{
                restaurantMenu.map((item)=>{
                    // console.log(item);
                    return (<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>);
                })    
            }</ul>
        </div>

        </>
    );
};

export default RestaurantMenu;