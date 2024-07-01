import { Link } from "react-router-dom"
const ResCard = (props)=>{
    const {restaurants} =props
    //console.log(restaurants)
    return(
        <>
        <Link to={"/restaurants/"+restaurants.id} style={{color:'black',textDecoration:'none'}}>
        <div className='restaurant-card'>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurants.cloudinaryImageId}/>
        <br />
        <br />
        <div className="card-item-details">
        <div style={{fontWeight:"bolder"}}>{restaurants.name}</div>
        <div>
            <span id="ratings">{restaurants.avgRatingString} </span> | 
            <span id="rupee">{restaurants.costForTwo}</span>
            </div>
        <div className="rescui">{restaurants.cuisines.join(', ')}</div>
        <div className="rescui">{restaurants.areaName}</div>
        <br />
        <span className="cidbtn"><button>Order Now</button></span>
        </div>
        
        </div>
        </Link>
        </>
    )
}

export default ResCard







