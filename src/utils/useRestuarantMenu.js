import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default RestaurantMenu;
