const ItemList=(props)=>{
    const {item} = props
    return(
        <>
        <div className="category-cont">
            
        <div className="price">
            <span className="dishname">{item.card.info.name}</span>  <span className="l-">- </span><span className="prices">{item.card.info.price /100}</span>
            </div>
        <div className="desc">{item.card.info.description}</div>
        </div>
        </>
    )
}
export default ItemList