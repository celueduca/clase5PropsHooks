import React from "react";
interface Props {

    text:string;
    yearNow:number;

}

const Footer = (props:Props) => {

    return (

        <>
        <h3>{props.text + ' '+ props.yearNow  }</h3>
        </>
    )
}
export default Footer