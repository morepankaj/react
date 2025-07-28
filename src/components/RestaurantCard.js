import { RES_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;
  //console.log(resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#b0adadff" }}>
      <img className="res-logo" src={RES_URL}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
