import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import useAuth from "../../hook/useAuth";


interface Props{

    title:string,
    add? :(n:number) => number
}

const Header = ({title, add }:Props) => {

    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }

    return (

        <div>
            <h1> {title + ' ' +
             (add?+ ' ' + add(5) : '')} </h1>
            
    
                    <li className="acomodar" onClick={ () => exit() }>Salir</li>
                
                   

        </div>
    )
}
export default Header