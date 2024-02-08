import React, { useEffect, useState } from 'react'
import { SWIGGY_URL_MENU, itemCardsDataIfAPIFails, menuDataIfAPIFails } from '../utils/constants';
import RestraurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from "./Shimmer";
import RestaurantCategory from './RestaurantCategory';
import MOCK from './../mocks/mockResMenu.json'

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);
  // const resInfo = MOCK;

  console.log(resInfo);


  const [showIndex,setShowIndex] = useState(null);

  if(resInfo===null) return <Shimmer/>;

  const {id,name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info

  const {itemCards} = resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);
  
  return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ") + " - " + costForTwoMessage}</p>    
        {/* categories accordian */} 
        {categories.map((category,index)=>{
          return <RestaurantCategory data={category?.card?.card} showItems={index==showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/> 
        })}
    </div>
  );
};

export default RestaurantMenu;