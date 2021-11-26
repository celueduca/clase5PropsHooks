import React, {useState, useEffect} from 'react'
import SubHeader from './SubHeader'

interface Props {
    title:string;
    add?: (n:number) => number //? = obligatorioa o no
}

const Header = ({title, add}: Props) => {

    return (
        <>
        
        <div className="container p-4">
            <h1>{title + " "}</h1>
        </div>
        
        </>
    )
}

export default Header
