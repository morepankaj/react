import { RES_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;
  //console.log(resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={RES_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
//m-4 p-3 w-52
//[] for custom css we use

//higher order component
export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    const header = props?.resData?.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader;
    console.log("Promoted", header, subHeader);
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-50 rounded-lg">
          {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

/*
{console.log(
            "Promoted",
            props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader || ""
          )}
            */
