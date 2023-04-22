console.log("App js is running");
//imported react from node modules
import React from "react";
import ReactDOM from "react-dom/client";
/*
        * Header
        *  - Logo
        *  - Nav Items
        *  - cart
        * Body
        *   - Search bar
        *   - RestrauntList
        *   - RestaurantCard
        *        - image
        *        - name
        *        - rating
        *        - cusines
        * Footer
        *   - links
        */

//inline styling in react====START===========
const styleObj = {
    backgroundColor: "red",
};
const jsx = (
    <div style={styleObj}>
        <h1>JSX</h1>
        <h2>Second JSX</h2>
        <h3 style={{
            color: "green",
        }}></h3>
    </div>
    
);
//inline styling=====END==================
const Title = ()=>{
    return (
        <a href="/">
        <img 
        className="logo"
        src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5653883.jpeg" alt="LOGO"/>
        </a>
    )
};
const Header = ()=>{
    return (<div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>); //need to wrap in () when writing in multiple line
} ;

const RestaurantCard = ()=>{
    return (
        <div className="card">
            <img alt="food" src="https://d1rgpf387mknul.cloudfront.net/category/Home/web/1x_web_20201214094752825353_114x101png"/>
            <h2>Burger King</h2>
            <h3>Burger American</h3>
            <h4>4.2 stars</h4>
        </div>
    );
}
//using object dynamic data insertion in HTML tags ------------[Starts]---[CONFIG-DRIVEN-UI]
const burgerKing = {
    name : 'Burger King',
    image : "https://d1rgpf387mknul.cloudfront.net/category/Home/web/1x_web_20201214094752825353_114x101png",
    cusines : ["Burger","American"], //array
    rating : "4.2"
};
const RestaurantCard1 = ()=>{
    return (
        //Injecting JS object using {}
        <div className="card">
            <img alt="food" src={burgerKing.image}/> 
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(" , ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    );
}
//using object dynamic data insertion in HTML tags ------------[Ends]------[CONFIG-DRIVEN-UI]

//------------CONFIG-DRIVEN-UI------------[starts]
const config = [
    {
        type: "carousel",
        cards: [
            {
                offerName : "50 % off"
            },
            {
                offerName : "No Delivery Charge"
            }
        ]

    },
    {
        type: "Restaurant",
        cards: [
            {
                name : 'Burger King',
                image : "https://d1rgpf387mknul.cloudfront.net/category/Home/web/1x_web_20201214094752825353_114x101png",
                cusines : ["Burger","American"], //array
                rating : "4.2"
            }
            
        ]

    }
];
const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "695536",
          "name": "Basundi - The Authentic Gujarati Thali - VASNA ROA",
          "uuid": "d7a0e936-96a1-4f7f-955e-ec09ddf86b9c",
          "city": "17",
          "area": "Gotri",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "f0c641609caedd15560d0383907179b4",
          "cuisines": [
            "Indian","American"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "slaString": "39 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "basundi---the-authentic-gujarati-thali---vasna-roa-gotri-gotri",
            "city": "vadodara"
          },
          "cityState": "17",
          "address": "ARTHAM ARIRS, Near Nilambar Circle,, Vadodara",
          "locality": "Nilambar Circle",
          "parentId": 416125,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6413224~p=1~eid=00000187-98b3-f2a7-26b0-202300b10170",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "695536",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "--",
          "totalRatings": 0,
          "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "118304",
          "name": "Pearl Restaurant",
          "uuid": "ef039453-5159-4636-9f53-011fa908873d",
          "city": "17",
          "area": "Alkapuri",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "vx07sxrdwl5wjh8z0n8k",
          "cuisines": [
            "North Indian",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "slaString": "17 MINS",
          "lastMileTravel": 0.4000000059604645,
          "slugs": {
            "restaurant": "pearl-restaurant-alkapuri-alkapuri",
            "city": "vadodara"
          },
          "cityState": "17",
          "address": "Pearl Restaurant, Near V mart, R.C.Dutt Road, Alkapuri, Vadodara",
          "locality": "Rc Dutt Road",
          "parentId": 156869,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT100 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹100 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.4 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "118304",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "lastMileTravel": 0.4000000059604645,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "573379",
          "name": "Burger King",
          "uuid": "81851b19-74a4-427e-bf4c-36c1a95dc99a",
          "city": "17",
          "area": "Sayajigunj",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "iqqyrdannjypv8mdwxal",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "burger-king-janmahal-akota",
            "city": "vadodara"
          },
          "cityState": "17",
          "address": "ISCON JANMAHAL,NEAR RAILWAY STATION,SAYAJIGANJ,UNIT NO 54 & 55,GUJARAT , VADODARA",
          "locality": "Iscon Jan Mahal ",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT120 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT120 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT120 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹120 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT120 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "573379",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
    }
];
//Optional Chaining = ?.
const RestaurantCard3 = ()=>{

    return (
        //Injecting JS object using {}
        <div className="card">
             <img className="card-image" alt="food" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantList[0].data.cloudinaryImageId}/> 
            <h2>{restaurantList[0].data?.name}</h2>
            <h3>{restaurantList[0].data?.cuisines.join(" , ")}</h3>
            <h4>{restaurantList[0].data?.totalRatings} stars</h4>
        </div>
    );
};  
//------------CONFIG-DRIVEN-UI------------[ENDS]


//-----------------------------PROPS----------------[STARTS]-----
// Pros is for properties which can be passed as a argument to function
// passing some data inside functional components
// pros will contain data JS object as key value where key will be passed prop name nad value will be data
const RestaurantProp = (props)=>{
    console.log(props.restaurant.data);//data will in key of restaurant which we passed
    return (
        <div className="card">
            <img className="card-image" alt="food" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data.cloudinaryImageId}/> 
            <h2>{props.restaurant.data?.name}</h2>
            <h4>{props.restaurant.data?.totalRatings} stars</h4>
        </div>
    );
};
//above improvement by decoupling/deconstructing the object in the props argument so that nesting doesn't happen
const RestaurantProp1 = ({restauran})=>{  
    //now we have direct access to restaurant argument eralier we have to access like props.restaurant
    //also deconstructing data from restaurant object
    console.log(restauran);
    const {name, cuisines,cloudinaryImageId,totalRatings} = restauran.data;
    return (
        <div className="card">
            <img className="card-image" alt="food" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} /> 
            <h2>{name}</h2>
            <h4>{totalRatings} stars</h4>
        </div>
    );
};

const RestaurantDeconstructor = ({name, cuisines,cloudinaryImageId,totalRatings})=>{
    return (
      <div className="card">
          <img className="card-image" alt="food" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} /> 
          <h2>{name}</h2>
          <h4>{totalRatings} stars</h4>
      </div>
  );
};

//-----------------------------PROPS----------------[ENDS]-----
const Body = ()=>{
    return (
        <div className="restaurant-list">
            <RestaurantCard />
            <RestaurantCard1 />
            <RestaurantCard3 />
            {
              //Using props
            }
            <RestaurantProp restaurant={restaurantList[0]} />
            <RestaurantProp restaurant={restaurantList[1]} />
            {
              //deconstructing props   
            }
            <RestaurantProp1 restauran={restaurantList[2]} />
            {
              //deconstructing and multiple props 
            }
            <RestaurantDeconstructor name={restaurantList[0].data.name} cloudinaryImageId={restaurantList[1].data.cloudinaryImageId} totalRatings={restaurantList[1].data.totalRatings} />
            {
              //same thing as above shorter using spread operator in ES6
            }
            <RestaurantDeconstructor  {...restaurantList[2].data}/>
            {
              // using map to show all the data in restaurant list and also provideing key for reconsicilation algorithm
              restaurantList.map((restaurant) => {
                return <RestaurantDeconstructor {...restaurant.data} key={restaurant.data.id}/>;
              })
              //Never to use Index of map as key in props
              //priority of using keys are
              // no values as key < index as keys < unique value present in data used as key
            };
        </div>
    );
};
const Footer = ()=>{
    return (
        <div></div>
    );
};

//any JSX component there can only be one component
// to resolve this  we can containerize all the tags in one div tag
// or there is one another method by react - React.Fragment which will not create extra div tags during rendering
// const AppLayout = ()=>{
//     return (
//         <div>
//         <Header/>
//         <Body />
//         <Footer />
//         </div>
//     );
// };
const AppLayout = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <Body />
            <Footer />
        </React.Fragment>
    )
}
//we can also use above code [diffrent syntax]
// const AppLayout = ()=>{
//     return (
//         <>
//             <Header/>
//             <Body />
//             <Footer />
//         </>
//     )
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);