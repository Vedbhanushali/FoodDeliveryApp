import {useState,useEffect} from 'react';

//creating Hooks
// this will fetch the data and send it to component for render in RestaurantMenu
//Hooks returns some data - it doesn't return jsx.

const useRestaurant = (resId) => {
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
    return [restaurant,restaurantMenu];
};

export default useRestaurant;