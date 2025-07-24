import React from "react";
import ReactDOM from "react-dom/client";

//jsx => react.createElemnt => obj => htmlElement(render)

/**
 * Header
 *  - logo
 *  - home
 *  - about us
 *  - contact us
 *  - cart
 *
 * Body
 *  - search
 *  - list
 *
 * Footer
 *  - copyrights
 *  - links
 *  - career
 */

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="http://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
//even Title can be call as {Title()} || <Title /> || <Title></Title>

const listObj = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3734",
          name: "Zaffran",
          cloudinaryImageId: "bb1e6b13db0346d6ba7ffc7e05077c14",
          locality: "Lower Parel",
          areaName: "Lower Parel",
          costForTwo: "₹1300 for two",
          cuisines: ["Biryani", "Indian", "Kebabs", "Rolls & Wraps", "Mughlai"],
          avgRating: 4.4,
          parentId: "1206",
          avgRatingString: "4.4",
          totalRatingsString: "11K+",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "849",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3734&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "284271",
          name: "Home Plate by EatFit",
          cloudinaryImageId: "e975b355e30661b40e3522641689cede",
          locality: "DELISLE ROAD",
          areaName: "LOWER PAREL",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts",
          ],
          avgRating: 3.8,
          veg: true,
          parentId: "301197",
          avgRatingString: "3.8",
          totalRatingsString: "1.6K+",
          promoted: true,
          adTrackingId:
            "cid=31363594~p=21~adgrpid=31363594#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=284271~plpr=COLLECTION~eid=53b5bfc7-4811-43a8-ac5e-f9fd895ebc0d~srvts=1753373102831~collid=83633",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:45:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31363594",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=284271&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3126",
          name: "Punjabi Tadka by Crystal 'Chowpatty Fame'",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/d020b2a0-a186-4d2b-8aa5-07e8aeb20632_3126 (1).jpg",
          locality: "Lower Parel",
          areaName: "Lower Parel",
          costForTwo: "₹300 for two",
          cuisines: [
            "Tandoor",
            "Punjabi",
            "Biryani",
            "Healthy Food",
            "Fast Food",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.2,
          parentId: "162530",
          avgRatingString: "4.2",
          totalRatingsString: "49K+",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-25 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "68",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3126&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "156091",
          name: "The Good Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/75e48ccf-d80e-4413-b544-d541663c6473_156091.jpg",
          locality: "Dr E Moses road",
          areaName: "Worli",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.5,
          parentId: "7918",
          avgRatingString: "4.5",
          totalRatingsString: "2.1K+",
          promoted: true,
          adTrackingId:
            "cid=31360289~p=22~adgrpid=31360289#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=156091~plpr=COLLECTION~eid=01ce5b41-d25b-4bf5-a2ce-9368dd9ef48a~srvts=1753373102831~collid=83633",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:59:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31360289",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=156091&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "57229",
          name: "Cafe National",
          cloudinaryImageId: "s9w9vd1g2fav1lanykkc",
          locality: "Mahalaxmi",
          areaName: "Jacob Circle",
          costForTwo: "₹350 for two",
          cuisines: ["Indian", "Chinese"],
          avgRating: 4.3,
          parentId: "53757",
          avgRatingString: "4.3",
          totalRatingsString: "25K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=57229&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "16638",
          name: "Social",
          cloudinaryImageId: "znzc6krkfgr6uy8ah18a",
          locality: "Lower Parel",
          areaName: "Lower Parel Worli",
          costForTwo: "₹500 for two",
          cuisines: [
            "Chinese",
            "Fast Food",
            "Biryani",
            "Pizzas",
            "Salads",
            "Kebabs",
            "Juices",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.4,
          parentId: "616464",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=31359874~p=26~adgrpid=31359874#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=16638~plpr=COLLECTION~eid=2717b3a4-132d-4e2b-99ef-d41d9f36bcf6~srvts=1753373102831~collid=83633",
          sla: {
            deliveryTime: 58,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-25 02:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹199",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31359874",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=16638&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "564637",
          name: "Peetuk",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/9/b12200d9-4632-4cc8-be95-fc0200e8f0bb_564637.jpg",
          locality: "Mathurdas Mill Compound",
          areaName: "Lower Parel",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Bengali"],
          avgRating: 4.3,
          parentId: "1668",
          avgRatingString: "4.3",
          totalRatingsString: "7.5K+",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "4 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=564637&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "575098",
          name: "Veg Darbar by Behrouz Biryani",
          cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
          locality: "Hawabhai Complex",
          areaName: "Worli",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "344904",
          avgRatingString: "4.1",
          totalRatingsString: "14",
          promoted: true,
          adTrackingId:
            "cid=31360288~p=29~adgrpid=31360288#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=575098~plpr=COLLECTION~eid=6641ba43-bf90-4ac2-b6e7-5c9bc70d3dac~srvts=1753373102831~collid=83633",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31360288",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=575098&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const styleCard = {
  backgroundColor: "#4a4040ff",
};

const RestaurantCard = (prop) => {
  const { resData } = prop;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={{ styleCard }}>
      <img
        className="res-logo"
        src="https://as2.ftcdn.net/v2/jpg/02/75/70/03/1000_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">search</div>
      <div className="res-container">
        <RestaurantCard resData={listObj[0]} />
        <RestaurantCard resData={listObj[1]} />
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
