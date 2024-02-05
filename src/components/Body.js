import RestaurantCard, { withOpenLabel, withPromotedLabel } from "./RestaurantCard";
import  { SWIGGY_URL, SWIGGY_URL1, SWIGGY_URL2 } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
import UserContext from "../utils/UserContext";

const Body = () => {

    const {loggedInUser,setUserName,isLoggedIn,setIsLoggedIn} = useContext(UserContext);

    const [searchBoxInput,setSearchBoxInput] = useState([]);

    const {listOfRestaurants,setListOfRestaurants,cachedRestaurants,setCachedRestaurants} = useRestaurants(SWIGGY_URL); 

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);
    
    const isOnline = useOnlineStatus();
    if(!isOnline) return (<h1>Please check your internet</h1>);

    return (
        <div className="body">
            <div className="flex justify-center">
                {   !isLoggedIn 
                    && 
                    <input
                        className="border border-solid border-black rounded-lg p-2 m-2"
                        type="text" 
                        value={loggedInUser}
                        placeholder="Enter your user name"
                        onChange={e=>setUserName(e.target.value)}
                    />
                }
            </div>

            <div className="filter flex justify-center">

                
                
                <div className="search">

                    <input
                        className="border border-solid border-black rounded-lg p-2"
                        type="text" 
                        value={searchBoxInput}
                        placeholder="Search by name or cuisine.."
                        onChange={e=>setSearchBoxInput(e.target.value)}
                    />

                    <button className="px-4 py-2 bg-blue-100 m-4 rounded-lg" onClick={
                        ()=>{
                                try{
                                    let filteredList = cachedRestaurants.filter((restaurant) =>
                                    restaurant.info.name.toLowerCase().includes(searchBoxInput.toLowerCase()) ||
                                    restaurant.info.cuisines.join("").toLowerCase().includes(searchBoxInput.toLowerCase()));
                                    setListOfRestaurants(filteredList);
                                }catch(error){
                                    console.log("please type something in search box");
                                    setListOfRestaurants(cachedRestaurants);
                                }
                        }
                    }>Search</button>

                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
                        () => {                     
                            const filteredList = listOfRestaurants.filter(
                                (restaurants) => restaurants?.info?.avgRating && restaurants?.info?.avgRating > 4.5
                                
                            );
                            setListOfRestaurants(filteredList);
                        }
                    }>Top Rated Restraurant
                    </button>
                
                </div>

            </div>

            <div className="flex flex-wrap">
                {
                listOfRestaurants.map( restaurant => {
                    try{
                        return <Link className="link" to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                            {
                                restaurant.info.isOpen ? (<RestaurantCardOpen resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>)
                            }
                            </Link>
                    }
                    catch(error){
                        return <h1>{error}</h1>
                    }
                }) 
                }
            </div>
            
        </div>
    )
}

export default Body;