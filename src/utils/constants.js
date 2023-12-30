export const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_320,c_fill/";
import { itemCardsDataIfAPIFails } from './constants';

export const SWIGGY_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&collection=90964&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"

export const SWIGGY_URL_MENU = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6263806&lng=88.3555025&restaurantId="


const dataIfAPIFails = {
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CI4gEOMTKICAkZnNuMGiMzDqCTgE",
      "widgetOffset": {
        "inlineFacetFilter": "",
        "collectionV5RestaurantListWidget": "13",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "90964",
            "title": "WELCOME50",
            "imageId": "59977d73dd3b8d9769e431022d624566",
            "aspectRatio": "1",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=90964&tags=layout_ux4",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_ONLY_IMAGE",
            "count": "337 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 337,
            "facetList": [
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery2",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery3",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings 3.5+",
                    "id": "ratingfacetquery3",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery4",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery5",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery2",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery3",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery3",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery4",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery5",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by",
                "openFilter": true
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "26501",
              "name": "Subway",
              "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
              "locality": "Inside Avani Mall",
              "areaName": "Shibpur",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "2",
              "avgRatingString": "4.3",
              "totalRatingsString": "5K+",
              "promoted": true,
              "adTrackingId": "cid=10078850~p=1~eid=0000018c-a67a-a422-20a2-775800ac014b~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "aggregatedDiscountInfoV2": {},
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=26501",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "613916",
              "name": "KFC",
              "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
              "locality": "G T Road",
              "areaName": "Platina Mall",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 4.3,
              "parentId": "547",
              "avgRatingString": "4.3",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=613916",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "224452",
              "name": "Behrouz Biryani",
              "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
              "locality": "HOWRAH",
              "areaName": "Mali Panchghara",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "1803",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=10168453~p=2~eid=0000018c-a67a-a422-20a2-775900ac0209~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=224452",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "31201",
              "name": "The Punjabis",
              "cloudinaryImageId": "af01f965c7cfb0ca4fa9bf86b8bfc338",
              "locality": "Near Howrah Joesph Chandra Girls School",
              "areaName": "Kolkata",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Punjabi"
              ],
              "avgRating": 4.1,
              "parentId": "212869",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:55:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=31201",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "719195",
              "name": "Aryan's Kitchen",
              "cloudinaryImageId": "171ab603e22b4f9fe4f925587b813009",
              "locality": "Maulana Abul Kalam Azad Road",
              "areaName": "Howrah",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Fast Food",
                "Chinese",
                "Sweets"
              ],
              "avgRating": 3.7,
              "parentId": "36611",
              "avgRatingString": "3.7",
              "totalRatingsString": "50+",
              "promoted": true,
              "adTrackingId": "cid=10154714~p=3~eid=0000018c-a67a-a422-20a2-775a00ac0343~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=719195",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "392663",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Avni Mall",
              "areaName": "Howrah",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.2,
              "parentId": "166",
              "avgRatingString": "4.2",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-27 01:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=392663",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "472284",
              "name": "The 99 Thali Shop by Chaigram",
              "cloudinaryImageId": "iospaekfsaml11a8fby3",
              "locality": "Treat Food Court",
              "areaName": "Howrah",
              "costForTwo": "₹198 for two",
              "cuisines": [
                "Thalis",
                "Bengali",
                "Indian",
                "Chinese",
                "Continental"
              ],
              "avgRating": 4,
              "parentId": "284836",
              "avgRatingString": "4.0",
              "totalRatingsString": "500+",
              "promoted": true,
              "adTrackingId": "cid=10154093~p=4~eid=0000018c-a67a-a422-20a2-775b00ac047b~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:30:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "aggregatedDiscountInfoV2": {},
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {}
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=472284",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "27113",
              "name": "Domino's Pizza",
              "cloudinaryImageId": "bhgjyrvauycn3zoeolla",
              "locality": "Dobson Road",
              "areaName": "Dominos Only Kolkata",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "2456",
              "avgRatingString": "4.1",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:59:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=27113",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "796294",
              "name": "Chhayataru food joint",
              "cloudinaryImageId": "b33020eb6608b35bc925b8cf8614b418",
              "locality": "Shibpur",
              "areaName": "Howrah",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Chinese",
                "Asian",
                "Snacks"
              ],
              "parentId": "475942",
              "avgRatingString": "NEW",
              "promoted": true,
              "adTrackingId": "cid=9767972~p=5~eid=0000018c-a67a-a422-20a2-775c00ac0532~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "39 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 22:30:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=796294",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "8587",
              "name": "Royal Indian Hotel - Since 1905",
              "cloudinaryImageId": "oblqcc3ecvw4q9f7ukec",
              "locality": "Bara Bazar",
              "areaName": "Bara Bazar",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "North Indian",
                "Biryani",
                "Mughlai"
              ],
              "avgRating": 4.5,
              "parentId": "471251",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 23:30:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=8587",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "556052",
              "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
              "cloudinaryImageId": "oktoazwjt8msr38uihxc",
              "locality": "Gtroad",
              "areaName": "Howrah",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "582",
              "avgRatingString": "4.6",
              "totalRatingsString": "500+",
              "promoted": true,
              "adTrackingId": "cid=9929426~p=6~eid=0000018c-a67a-a422-20a2-775d00ac0614~srvts=1703600104482~90964",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-26 22:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=556052",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "457037",
              "name": "Cakes by Mama Mia!",
              "cloudinaryImageId": "843642640f566fade81f12f769b5faed",
              "locality": "Dobson Road",
              "areaName": "Howrah",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Bakery",
                "Desserts"
              ],
              "avgRating": 4.7,
              "parentId": "274241",
              "avgRatingString": "4.7",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-12-27 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {},
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=457037",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "f6429e1d-ae0c-4339-b74c-488df2074a86",
  "sid": "b8j1b150-5d02-4a48-b63e-779e7ecaaa42",
  "deviceId": "fbe7135d-4dcb-90ce-f6d1-6644f6a20068",
  "csrfToken": "SydYwJv7YATb-U83_DLOveHr_zyuD_D6U0Pcy3d8"
}
  

export const menuDataIfAPIFails = {
    info:{"id": "149560",
    "name": "Pizza Hut",
    "cuisines": [
    "Italian",
    "Pizzas"
    ],
    "costForTwoMessage":"Rs 218 for two"
  }
}

export const itemCardsDataIfAPIFails = [
  {
    card: {
      info: {
        name: "Margerita"
      }
    }
  },
  {
    card: {
      info: {
        name: "4 cheese pizza"
      }
    }
  },
  {
    card: {
      info: {
        name: "Onion Pizza"
      }
    }
  }
];

      

export default dataIfAPIFails;

