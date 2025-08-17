import { useState } from "react";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestuarantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  let { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(">>>>>", categories);

  //"@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">{cuisines.join(", ")}</p>
      <p className="font-thin">{costForTwoMessage}</p>
      {categories.map((category, index) => (
        //controlled component
        <ResturantCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
