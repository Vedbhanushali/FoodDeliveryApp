import * as Constants from "../constants";

const RestaurantDeconstructor = ({name, cuisines,cloudinaryImageId,totalRatings})=>{
    return (
      <div className="card">
          <img className="card-image" alt="food" src={Constants.IMG_CDN_URL+cloudinaryImageId} /> 
          <h2>{name}</h2>
          <h4>{totalRatings} stars</h4>
      </div>
  );
};

export default RestaurantDeconstructor;