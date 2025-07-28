import RestaurantCard from "./RestaurantCard";
import { listObj } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(listObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listObj.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.card.card.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
