import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  let fetchMenuData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9986406&lng=72.8173599&restaurantId=" +
        resId
    );
    const json = await response.json();
    console.log(json);
    setRestaurant(json.data);
    //console.log(json.data?.cards[2]?.card?.card?.info);
    console.log(json.data);
  };

  //const { name, cuisines, costForTwoMessage } =
  //restaurant?.cards[2]?.card?.card?.info;
  //console.log(name, cuisines, costForTwoMessage);
  ////(`${RESTAURANT_MENU_URL}${resId}`);
  //if (restaurant === null) return <Shimmer />;

  let { itemCards } =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  /* console.log(
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,
    itemCards,
    "menu"
  ); */

  return (
    <div>
      <h1>{restaurant?.cards[2]?.card?.card?.info.name}</h1>
      <h2>{restaurant?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h2>
      <h3>{restaurant?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
      <h4>Menu</h4>
      {/* Add your menu items here */}
      <p>Menu items will be displayed here.</p>
      {/* You can use a list or any other structure to display the menu */}
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name + "-- ₹" + item.card.info.price / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
