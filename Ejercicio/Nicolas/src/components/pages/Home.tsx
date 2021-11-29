import React from "react";
import { Link } from "react-router-dom";
import "../../App";
import HeaderHome from "../../Layout/headerHome";
import "./Home.css";
import teclados from "./img/teclados.jpg";
import PC from "./img/PC.jpg";
import mouse from "./img/mouse.jpg";
import Audifonos from "./img/Audifonos.jpg";
import Mousepad from "./img/Mousepad.jpg";
import iphone from "./img/iphone.jpg";
const imgs = [
  { name: "PC", img: PC },
  { name: "Mouse", img: mouse },
  { name: "Audifonos", img: Audifonos },
  { name: "Mousepad", img: Mousepad },
  { name: "Iphone", img: iphone },
];
const Home = () => {
  return (
    <>
      <HeaderHome>
        <div>
          <header className="hero">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h1 className="text-white text-center text-shadow">
                    EQUIPO PARA JUEGOS AVANZADO
                  </h1>
                  <p className="text-white opacity-80 text-center">
                    Da el máximo en tu juego con el mejor equipo para juegos
                  </p>
                  <div className="text-center">
                    <Link to="/Products" className="button-home">
                      <span>Buy</span>
                      <div className="liquid"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="container mt-5 padding-top-3x padding-bottom-3x">
            <div className="row">
              <div className="card-group">
                {imgs.map(({ img }: any, i: number) => (
                  <div className="card m-5" key={i}>
                    <img src={img} className="d-block w-90 " alt="..." />

                    <div className="card-footer footer">
                      <small className="text-color ">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </HeaderHome>
    </>
  );
};

export default Home;
