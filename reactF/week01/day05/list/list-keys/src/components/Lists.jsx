
export default function Lists({obj}){

    return(
        <div className="item">
            <img src = {obj.image} alt = ""/>
            <h2>{obj.brand}</h2>
            <p>{obj.description}</p>
            <h3>{obj.price}</h3>
            <h2>{obj.rating}</h2>
            <button onClick={()=>{ alert("Product added to cart proceed to pay")}}>ADD TO CART</button>
        </div>
    )



}