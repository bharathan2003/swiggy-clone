import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCategory from "./itemCategory";
const ResDetails=(props)=>{
    const params=useParams()
    console.log(params)
    const [details, setDetails]=useState({})
    const [categories, setCategories]=useState([])
    
    useEffect(()=>{
        fetchdata()
          },[])

     const fetchdata= async()=>{
        const res= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${params.id}`);
        const json =await res.json();
        console.log(json);

        const details = json.data.cards[0].card.card.info
        const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        setDetails(details)
       
        const filteredCategories=categories.filter((items)=>{
            return items.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        setCategories(filteredCategories)
     }
     if(Object.keys(details). length===0){
        return(
            <div>Loading...</div>
        )
     }
    return(
        <>
        <div className="det">
        <h2>{details.name}</h2>
        <div className="cuis">{details.cuisines.join(', ')}</div>
        <div className="cuis">{details.areaName}</div>
        </div>
        {
            categories.map((category)=>{
                return  <ItemCategory key={category.card.card.title} category ={category}/>
            })
        }
        {/* <ItemCategory category ={categories[0]}/> */}
        </>
    )

}
export default ResDetails;