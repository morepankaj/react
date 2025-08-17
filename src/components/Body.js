import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import { useState, useEffect, lazy } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedlabel(RestaurantCard);

  //whenver the state variable update , react triggers a reconsilation cycle (re rendering the compoenent)

  const fetchData = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9986406&lng=72.8173599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    console.log(data);
    setlistOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline, please check your internet connection.
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black focus:shadow-inline m-4 p-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredLogic = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredLogic);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>{" "}
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {console.log(
              res?.info?.aggregatedDiscountInfoV3?.header === "ITEMS"
                ? res?.info?.name
                : ""
            )}
            {res?.info?.aggregatedDiscountInfoV3?.header === "ITEMS" ? (
              <PromotedRestaurantCard resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
