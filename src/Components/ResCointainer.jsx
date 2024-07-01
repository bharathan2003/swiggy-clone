
import ResCard from "./ResCard"
import { Outlet, useEffect, useState } from "react"
const ResCointainer=()=>{
    
// const restaurants  = [
//   {
//     "id": "324129",
//     "name": "Hmr - Grand Kitchen",
//     "cloudinaryImageId": "sxo9ssdzcunquvtrcvc6",
//     "locality": "Dr Nanjappa Road",
//     "areaName": "Gandhipuram",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Biryani",
//       "South Indian",
//       "North Indian",
//       "Chinese",
//       "Tandoor"
//     ],
//     "avgRating": 4.4,
//     "parentId": "96262",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "5K+",
//   },
// {
//     "id": "348158",
//     "name": "Covai Anganan Biriyani House",
//     "cloudinaryImageId": "riylxbx0j4kzeii1sef7",
//     "locality": "VCV Layout",
//     "areaName": "RS Puram",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Biryani",
//       "South Indian",
//       "Chinese"
//     ],
//     "avgRating": 4.3,
//     "parentId": "230662",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "1K+",
// },
// {
//         "id": "663817",
//         "name": "Ambur Star Briyani",
//         "cloudinaryImageId": "a8e7ce3136780a9d0e7abba21276efb9",
//         "locality": "ATT Colony",
//         "areaName": "Gopalapuram",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Biryani",
//           "South Indian",
//           "North Indian"
//         ],
//         "avgRating": 4.3,
//         "parentId": "5455",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "500+",
// },
// {
//     "id": "60959",
//     "name": "Denmarrk Drive-Inn Restaurant",
//     "cloudinaryImageId": "tokjoqdypfchrfxgxepm",
//     "locality": "ATT Colony",
//     "areaName": "Nehru Stadium",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Indian",
//       "Chinese",
//       "Arabian",
//       "Tandoor",
//       "Juices"
//     ],
//     "avgRating": 4.4,
//     "parentId": "4907",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "10K+",
// },
// {
//   "id": "654253",
//     "name": "Gobble: Pastas & Burgers",
//     "cloudinaryImageId": "df5118be546e687f45758da0433a1649",
//     "locality": "Ganapathy Village",
//     "areaName": "Gandhipuram",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Burgers",
//       "Pastas",
//       "American",
//       "Continental",
//       "Snacks"
//     ],
//     "avgRating": 4.2,
//     "parentId": "391931",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "1K+",
// },
// {
//   "id": "333124",
// "name": "Bakingo",
// "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
// "locality": "Srinagar Road",
// "areaName": "Peelamedu",
// "costForTwo": "₹300 for two",
// "cuisines": [
//   "Bakery",
//   "Desserts",
//   "Beverages",
//   "Snacks"
// ],
// "avgRating": 4.3,
// "parentId": "3818",
// "avgRatingString": "4.3",
// "totalRatingsString": "1K+"
// },
// {
//   "id": "61498",
//   "name": "Geetha Canteen",
//   "cloudinaryImageId": "d307f820c640fc02dd6242a358e69a79",
//   "locality": "Kalingarayan Street",
//   "areaName": "Gandhipuram",
//   "costForTwo": "₹100 for two",
//   "cuisines": [
//     "South Indian"
//   ],
//   "avgRating": 4.4,
//   "veg": true,
//   "parentId": "6459",
//   "avgRatingString": "4.4",
//   "totalRatingsString": "10K+",
// },
// {"id": "66005",
// "name": "Ramesh Mess",
// "cloudinaryImageId": "igbuqgkgxlmn2ecpyq2t",
// "locality": "Alagesan Road",
// "areaName": "Saibaba Colony",
// "costForTwo": "₹200 for two",
// "cuisines": [
//   "South Indian"
// ],
// "avgRating": 4.6,
// "parentId": "18399",
// "avgRatingString": "4.6",
// "totalRatingsString": "10K+"}]
const [restaurants,setRestaurants] = useState([])
const [searchText,setSearchText] = useState('')
const [list,setList] = useState([])
console.log(searchText)
useEffect(()=>{
  fetchdata()
 },[])
 const fetchdata = async()=>{
  const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await res.json()
  console.log(json)
  setRestaurants((json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
  setList((json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
 }

const filterTop=()=>{
  const result =restaurants.filter((res)=>{
    return res.info.avgRating >4.3
  })
  console.log("Top restaurant",result)
  setList(result)
}

const searchUpdate=(e)=>{
  setSearchText(e.target.value)
  searchRestaurant(e.target.value)
}

const searchRestaurant=(value)=>{
  console.log("-->value",value)
  console.log("-->searchtext",searchText)
  const resulting=restaurants.filter((res)=>{
    return res.info.name.toLowerCase().includes(value.toLowerCase())
  })
  setList(resulting)
}

 if(restaurants.length===0)
 {
   return <div className="load">L O A D I N G (-_-)</div>
 }

    return(
        <>
      <div id="btn">
        <input type="text" value={searchText} onChange={searchUpdate} placeholder="Search your fav food"/>   {/*bind the inp statement */}
        {/* <button onClick={searchRestaurant}>search</button> */}
        <button onClick={filterTop} >Top Restaurant</button>
      </div>
      <br />
      <div className='restaurant-cointainer'>
      {/* <ResCard restaurants ={restaurants[0]}/>
      <br />
      <ResCard restaurants ={restaurants[1]}/> */}
      {list.map((res)=>{
        return <ResCard key= {res.info.id}restaurants = {res.info}/>
      })}
      </div>
      </>
    )
}
export default ResCointainer