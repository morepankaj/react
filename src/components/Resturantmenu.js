import useRestuarantMenu from "../utils/useRestuarantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  let { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      <h2>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h2>
      <h3>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
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
