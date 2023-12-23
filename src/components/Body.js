import RestraurantCard from "./Restaurant";
import restaurantList from "../utils/constants";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList);
    return (
        <div className="body">
            <div className="filter">
                <button onClick={
                    () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        )
                        setListOfRestaurants(filteredList);
                    }
                } className="filter-btn">Top Rated Restraurant</button>
            </div>
            <div className="res-container">
                {
                  listOfRestaurants.map(restaurant=>
                    <RestraurantCard key={restaurant.data.id} resData={restaurant}
                  />)
                }
            </div>
        </div>
    )
}

export default Body;