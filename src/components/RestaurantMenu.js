import React, { useEffect, useState } from 'react'
import { SWIGGY_URL_MENU, itemCardsDataIfAPIFails, menuDataIfAPIFails } from '../utils/constants';
import RestraurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import './RestaurantMenu.css'; 

const RestaurantMenu = () => {

  const {resId} = useParams();
  //console.log(resId)

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
  },[])


  const {id,name,cuisines,costForTwoMessage} = restaurantDetails?.info

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h1>{name}</h1>
        <div className='restaurant-info'>{costForTwoMessage + " - " + cuisines.join(", ")}</div>
      </div>
      <h2>Menu</h2>
      <ul className='menu-list'>
        {itemCards.map((items, id) => (
          <li key={id} className='menu-item'>
            {items?.card?.info?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu