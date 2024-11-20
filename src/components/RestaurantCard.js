import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";                                    
import Shimmer from "./Shimmer";

const RestraurantCard = (props) => {
    const { resData } = props;

    //since for fail safe, mock data is already there, have to simulate Shimmer loading with set time-out


    if(resData===null) return <Shimmer/>;

    //loading actual data 

    const { id, cloudinaryImageId, name, cuisines, avgRating, sla,isOpen } = resData?.info;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] h-[550px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="card-content">
                <img className="res-logo rounded-lg w-[300px] h-[300px]" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <br/>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
            <RestaurantCard {...props}/>
        </div>
        )
    }
}


export default RestraurantCard;
