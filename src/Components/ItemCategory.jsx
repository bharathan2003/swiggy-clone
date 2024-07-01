import ItemList from "./ItemList"
const ItemCategory=(props)=>{
    //const {category} = props
    const category = props.category
    return(
        <>
        <div className="category-container">
        <div className="dish">~ {category.card.card.title}</div>
        <div className="item">
            {category.card.card.itemCards.map((item)=>{
                return <ItemList item={item}/>
            })}
        </div>
        </div>
        </>
    )
}
export default ItemCategory