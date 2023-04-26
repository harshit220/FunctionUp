// productDetails = {
//     productId : ‘1’,
//     productPic : ‘’,
//     productName : ‘’,
//     Brand : ‘
//     productDescription : ‘’,
//     Price : ‘7$’,
//     Rating :
//  }

export default function ProductCard(props) {
  const { id, image, name, brand, description, price, rating } = props;
  const handleClick = ()=>{
    alert (`Product of is  ${id}, which is Shoes of brand ${brand} has of rupees ${price} is added in the cart , please proceed to pay !!! `
        )
  }
  return (
    
      <div style={{width:"300px", padding:"20px",alignText:"center",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",background:"white"}}>
        <img src={image} alt={name} style={{ width: "150px" }} />
        <h2>{name}</h2>
        <p>{brand}</p>
        <p>{description}</p>
        <h3>{price}</h3>
        <p>Rating: {rating}</p>
        <button onClick={handleClick} style = {{width:"100%", padding:"10px", color: "white", backgroundColor: "black"}} >ADD TO CART</button>
    </div>
  );
}
