import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurant";
// import { SWIGGY_RES_MENU } from "../constants";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () =>{

    const {resId} = useParams();
    console.log("while rendering params",resId);
    
    const data = useRestaurant(resId);

    return (!data[0]) ? <Shimmer />:
        (
        <>
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>Welcome to {data[0].name}</h2>
            <img src={IMG_CDN_URL+data[0].cloudinaryImageId}></img>
            <h3>Area Name : {data[0].areaName}</h3>
            <h4>Average Rating : {data[0].avgRating}</h4>
            <h2>Menu : {console.log(typeof data[1])}</h2>
            <ul>{
                data[1].map((item)=>{
                    // console.log(item);
                    return (<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>);
                })    
            }</ul>
        </div>

        </>
    );
};

export default RestaurantMenu;