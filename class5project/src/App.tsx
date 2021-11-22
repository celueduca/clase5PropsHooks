import React, { useState, useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import useCounter from './hooks/useCounter';
import Body from './components/Body/Body';


function App() {

  const [counter, increment, reset] = useCounter();
  const ref = useRef(null);
  const [products, setProducts] = useState([
    { name: 'producto1', value: '$15.000', quantity: 50 },
    { name: 'producto2', value: '$25.000', quantity: 250 },
    { name: 'producto3', value: '$185.000', quantity: 20 },
  ]);
  const [car, setCar] = useState([]);

  const add = (number: number): number => {
    return number + 1;
  }

  const yearNow = (): number => {
    return new Date().getFullYear();
  }

  {/*const clickUseRef = () => {
    if (ref !== null) {
      console.log(ref.current.value);
    }
  }*/}

  return (
    <>
      <Header
        title="Este es el Header"
        add={add}
        car={car} />

      <Body
        products={products}
        setProducts={setProducts}
        car={car}
        setCar={setCar} />
      {/*USE REF
      <input ref={ref}></input>
      <button onClick={() => clickUseRef()}></button>
      {/*<h5>{ref.current.value}</h5>*/}


      {/*CUSTOM HOOK
      <h1 ref={ref}>clicks {counter}</h1>
      <button onClick={increment}>Sumar</button>
    <button onClick={reset}>Reiniciar</button>*/}

      <Footer
        text="Celuweb"
        year={yearNow()} />
    </>

  );
}

export default App;
