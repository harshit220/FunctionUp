
import "./App.css";
import Lists from "./components/Lists";

function App() {
  const arr = [
    {
      id: "1",
      image:
        "https://images-cdn.ubuy.co.in/6357d27ff557ce66d3108b53-nike-air-max-200-men-running-shoes-air.jpg",
      name: "Nike Air Max 90 Futura",
      brand: "Nike",
      description:
        "With its sleek, sporty design, the Nike Air Max AP lets  in first-class comfort.",
      price: "$150",
      rating: "4",
    },
    {
      id: "2",
      image:
        "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/h/u/hublot-classic-fusion-511-no-1181-lr-large.jpg",
      name: "Classic Fusion",
      brand: "HUBLOT",
      description: "CLASSIC FUSION-REVITALISING CARLO CROCCO'S CLASSIC",
      price: "$777",
      rating: "5",
    },
    {
      id: "3",
      image:
        "https://cdn.pixelbin.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/13032023img/410381120019_1.jpg",
      name: "VINTAGE HOME RUN BLUE T-SHIRT",
      brand: "SuperDry",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry ",
      price: "$110",
      rating: "4",
    },
  ];
  return (<div className="App">

   {arr.map((element)=>
    <Lists obj = {element}/>

   )}
  </div>)
}

export default App;
