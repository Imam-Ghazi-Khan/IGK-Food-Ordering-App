import React, { useEffect, useState } from 'react'
import { SWIGGY_URL_MENU, itemCardsDataIfAPIFails, menuDataIfAPIFails } from '../utils/constants';
import RestraurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import './RestaurantMenu.css'; 
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

  const {resId} = useParams();

  const {restaurantDetails,itemCards} = useRestaurantMenu(resId);

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

export default RestaurantMenu;