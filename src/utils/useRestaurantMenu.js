import { useEffect, useState } from "react";
import { SWIGGY_URL_MENU, itemCardsDataIfAPIFails, menuDataIfAPIFails } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
      const fetchData = async () => {
        try{
          const data = await fetch(SWIGGY_URL_MENU+resId);
          const json = await data.json();
          setResInfo(json.data);
        }catch(e){
          console.log("Error Fetching Data hence loading dummy data");
        }
    }       
    fetchData();
    },[]);

    return resInfo;
}

export default useRestaurantMenu;