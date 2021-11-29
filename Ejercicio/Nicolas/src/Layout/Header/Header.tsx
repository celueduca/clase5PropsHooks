import React, {useState, useEffect} from 'react'
import {Product  } from '../../components/Cards'
import SubHeader from './SubHeader'
import 'boxicons'
import { Link } from 'react-router-dom'

interface Props {
    title: string,
    itemsBuy:Product[],
}

const Header = ({title,itemsBuy}: Props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" >{title}</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          <Link to="/" className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Cart" className="nav-link active"  >Cart</Link>
        </li>
            </ul>
            <SubHeader products={itemsBuy}></SubHeader>
        </div>
      </nav>
    )
}

export default Header