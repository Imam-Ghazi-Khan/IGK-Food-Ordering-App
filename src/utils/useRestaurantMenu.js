import { useEffect, useState } from "react";
import { SWIGGY_URL_MENU, itemCardsDataIfAPIFails, menuDataIfAPIFails } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurantDetails,setRestaurantDetails] = useState(menuDataIfAPIFails);

    const [itemCards,setItemCards] = useState(itemCardsDataIfAPIFails);

    useEffect(()=>{
      const fetchData = async () => {
        try{
          const data = await fetch(SWIGGY_URL_MENU+resId);
          const json = await data.json();
          const menu = json?.data?.cards[0]?.card?.card
          setRestaurantDetails(menu);
          const itemCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
          setItemCards(itemCards);
          console.log(itemCards);
        }catch(e){
          console.log("Error Fetching Data hence loading dummy data");
        }
    }       
    fetchData();
    },[]);

    return {restaurantDetails,itemCards};
}

export default useRestaurantMenu;