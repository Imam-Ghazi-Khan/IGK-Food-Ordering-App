import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestraurantCard = (props) => {
    const {resData} = props;
    // console.log(resData);
    const {id,cloudinaryImageId,name,cuisines,avgRating, sla} = resData

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+
            cloudinaryImageId
            }
        />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestraurantCard;