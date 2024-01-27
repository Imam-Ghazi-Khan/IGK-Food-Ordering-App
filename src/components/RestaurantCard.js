import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { useEffect, useState } from "react";

const RestraurantCard = (props) => {
    const { resData } = props;
    

    //since for fail safe, mock data is already there, have to simulate Shimmer loading with set time-out
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); 
        };

        fetchData();
    }, []); 

    if (isLoading) {
        return <Shimmer />;
    }

    //loading actual data 

    const { id, cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <div className="card-content">
                <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export default RestraurantCard;
