
import './App.css';
import ProductCard from './components/ProductCard';

// productDetails = {
//   productId : ‘1’,
//   productPic : ‘’,
//   productName : ‘’,
//   Brand : ‘
//   productDescription : ‘’,
//   Price : ‘7$’,
//   Rating : 
// }


function App() {
  return (
    <div className="App"> 
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"30px",margin:"auto",padding:"30px"}}>
    <ProductCard id = "1" image = "https://images-cdn.ubuy.co.in/6357d27ff557ce66d3108b53-nike-air-max-200-men-running-shoes-air.jpg" name = "Nike Air Max 90 Futura" brand = "Nike" description = "With its sleek, sporty design, the Nike Air Max AP lets you bridge past and present in first-class comfort." price = "$150" rating = "4"/>
      <ProductCard id = "2" image = "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/h/u/hublot-classic-fusion-511-no-1181-lr-large.jpg" name = "Classic Fusion" brand = "HUBLOT" description = "CLASSIC FUSION-REVITALISING CARLO CROCCO'S CLASSIC" price = "$777" rating = "5"/>
      <ProductCard id = "3" image = "https://cdn.pixelbin.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/13032023img/410381120019_1.jpg" name = "VINTAGE HOME RUN BLUE T-SHIRT" brand = "SuperDry" description = " Lorem Ipsum is simply dummy text of the printing and typesetting industry " price = "$110" rating = "4"/>
    </div>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"30px",margin:"auto",padding:"30px"}}>
      <ProductCard id = "4" image = "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-speedy-bandouli%C3%A8re-25-damier-azur-canvas-handbags--N40473_PM2_Front%20view.png?wid=2048&hei=2048" name = "Speedy Bandoulière 25" brand = "Louis Vuitton" description = "The Speedy Bandoulière 25 handbag gets a summery makeover in Damie print." price = "$329" rating = "4"/>
      <ProductCard id = "5" image = "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-1-1-millionaires-sunglasses-s00-sunglasses--Z1165W_PM2_Front%20view.png?wid=2048&hei=2048" name = "Millionaires Sunglasses" brand = "Louis Vuitton" description = "Millionaires sunglasses worn in Al Capone's Chicago, ound of Artistic Director Virgil Abloh" price = "$124" rating = "4"/>
      </div>
     
    </div>
  );
}

export default App;
