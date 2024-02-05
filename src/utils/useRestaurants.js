import { useEffect, useState } from "react";


const useRestaurants = (URL) => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [cachedRestaurants,setCachedRestaurants] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const data = await fetch(URL);
                const json = await data.json();
                //Optional Chaining
                const removedFirst2RestaurantCards = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                if (removedFirst2RestaurantCards) {
                    setListOfRestaurants(removedFirst2RestaurantCards);
                    setCachedRestaurants(removedFirst2RestaurantCards);
                }
            }catch(error){
                console.log("api fetch failed due to cors error,hence loading mock data(use cors extension if you need live data)");
            }
        }       
        fetchData();
    },[]);

    return {listOfRestaurants,setListOfRestaurants,cachedRestaurants,setCachedRestaurants};
}

export default useRestaurants;
