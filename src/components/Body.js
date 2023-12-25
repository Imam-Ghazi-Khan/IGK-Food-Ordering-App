import RestaurantCard from "./Restaurant";
import restaurantList, { SWIGGY_URL1, SWIGGY_URL2 } from "../utils/constants";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [cachedRestaurants,setCachedRestaurants] = useState([]);
    const [searchBoxInput,setSearchBoxInput] = useState([]);
   
   useEffect(()=>{
    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL2);
        const json = await data.json();
        const removedFirst2RestaurantCards = json.data.cards.slice(2);
        setListOfRestaurants(removedFirst2RestaurantCards);
        setCachedRestaurants(removedFirst2RestaurantCards);
    }       
    fetchData();
   },[]);
   
    return (
        <div className="body">
            <div className="filter">
                <input
                    className="search-box"
                    type="text" 
                    value={searchBoxInput}
                    placeholder="Search by name or cuisine.."
                    onChange={e=>setSearchBoxInput(e.target.value)}
                />
                <button onClick={
                    ()=>{
                        let filteredList= cachedRestaurants.filter((restaurant) =>
                        restaurant.card.card.info.name.toLowerCase().includes(searchBoxInput.toLowerCase()) ||
                        restaurant.card.card.info.cuisines.join("").toLowerCase().includes(searchBoxInput.toLowerCase()));
                        if(!searchBoxInput){
                            setListOfRestaurants(cachedRestaurants);
                            }
                        else{
                            setListOfRestaurants(filteredList);
                        }
                    }
                } className="search-btn">Search</button>

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