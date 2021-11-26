//rafce

import React from 'react'

interface Props {
    text:string,
    year:() => number
}

const Footer = ( props:Props ) => {
    return (
        <footer className="container text-center py-5">
            <p>&#169; {props.text + ' ' + props.year()}</p> 
        </footer>
    )
}

export default Footer
