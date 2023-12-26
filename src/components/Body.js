import RestaurantCard from "./Restaurant";
import dataIfAPIFails, { SWIGGY_URL1, SWIGGY_URL2 } from "../utils/constants";
import { useEffect, useState } from "react";
import dataIfAPIFails from "../utils/constants";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [cachedRestaurants,setCachedRestaurants] = useState([]);
    const [searchBoxInput,setSearchBoxInput] = useState([]);
   
   useEffect(()=>{
    const fetchData = async () => {
        try{
            const data = await fetch(SWIGGY_URL2);
            const json = await data.json();
            //Optional Chaining
            const removedFirst2RestaurantCards = json?.data?.cards?.slice(2);
            setListOfRestaurants(removedFirst2RestaurantCards);
            setCachedRestaurants(removedFirst2RestaurantCards);
        }catch(error){
            console.log("api fetch failed due to cors error,hence loading mock data(use cors extension if you need live data)");
            const dummyDataIfAPIFails = dataIfAPIFails?.data?.cards?.slice(2);
            setListOfRestaurants(dummyDataIfAPIFails);
            setCachedRestaurants(dummyDataIfAPIFails);
        }
    }       
    fetchData();
   },[]);
   
    return (
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input
                        className="search-box"
                        type="text" 
                        value={searchBoxInput}
                        placeholder="Search by name or cuisine.."
                        onChange={e=>setSearchBoxInput(e.target.value)}
                    />
                    <button onClick={
                        ()=>{
                            if(!searchBoxInput){
                                setListOfRestaurants(cachedRestaurants);
                            }
                            else{
                                try{
                                    let filteredList = cachedRestaurants.filter((restaurant) =>
                                    restaurant.card.card.info.name.toLowerCase().includes(searchBoxInput.toLowerCase()) ||
                                    restaurant.card.card.info.cuisines.join("").toLowerCase().includes(searchBoxInput.toLowerCase()));
                                    setListOfRestaurants(filteredList);
                                }catch(error){
                                    console.log("please type something in search box");
                                }
                            }
                        }
                    } className="search-btn">Search</button>
                </div>

                <button onClick={
                    () => {                     
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.card?.card?.info?.avgRating > 4
                        )
                        setListOfRestaurants(filteredList);
                    }
                } className="filter-btn">Top Rated Restraurant</button>

            </div>

            <div className="res-container">
                {
                  listOfRestaurants.map( restaurantObj => {
                    const restaurant = restaurantObj?.card?.card?.info
                    return <RestaurantCard key={restaurant?.id} resData={restaurant}/>
                }) 
                }
            </div>
            
        </div>
    )
}

export default Body;