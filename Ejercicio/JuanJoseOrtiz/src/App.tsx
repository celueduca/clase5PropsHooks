import React from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  const add = (number: number): number => {
    return number + 1;
  };

  const year = (): number => {
    const dateNow = new Date();
    return dateNow.getFullYear();
  };

  console.log('re render')

  const [products, setProducts] = React.useState([
    { name: "Fifa 22", value: 244900, quantity: 8 , url: 'https://http2.mlstatic.com/D_NQ_NP_2X_921459-MCO47244614831_082021-F.webp' },
    { name: "Call Of Duty Ww2 Ps4", value: 134900, quantity: 12 , url: 'https://http2.mlstatic.com/D_NQ_NP_2X_627158-MCO40628907066_022020-F.webp' },
    { name: "Far Cry 6 Ps4", value: 244582, quantity: 30 , url: 'https://http2.mlstatic.com/D_NQ_NP_2X_822174-MCO47818659610_102021-F.webp' },
    { name: "God Of War Fisico Ps4", value: 94000, quantity: 26, url: 'https://http2.mlstatic.com/D_NQ_NP_2X_782205-MCO40292161426_122019-F.webp' },
    { name: "The Last Of Us Part II 5", value: 119000, quantity: 6, url: 'https://http2.mlstatic.com/D_NQ_NP_2X_933361-MCO42268907714_062020-F.webp' },
    { name: "Formula 1 2021 Ps4", value: 249000, quantity: 27, url: 'https://http2.mlstatic.com/D_NQ_NP_2X_941234-MCO46759100690_072021-F.webp' },
    { name: "Uncharted Collection Ps4 Fisico", value: 249000, quantity: 27, url: 'https://http2.mlstatic.com/D_NQ_NP_2X_941234-MCO46759100690_072021-F.webp' },
    { name: "Call Of Duty Vanguard Ps4", value: 249000, quantity: 27, url: 'https://http2.mlstatic.com/D_NQ_NP_2X_878673-MCO48125535617_112021-F.webp' },

    
  ]);
  
  const [itemBuys, setItemBuys] = React.useState([])

  return (
    <React.Fragment>
      <Header title="Marketplace" products={itemBuys}  add={add} />
      <Body products={products} setProducts={setProducts} itemBuys={itemBuys} setItemBuys={setItemBuys}></Body>
      <Footer text="Celuweb -" year={year} />
    </React.Fragment>
  );
}

export default App;
