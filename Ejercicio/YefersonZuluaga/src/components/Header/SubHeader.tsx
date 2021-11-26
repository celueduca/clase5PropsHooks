import React,{ useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import useAuth from "../../hook/useAuth";

interface Product{

    name:string,
    value:string,
    quantity:number,
}
interface Props{

    products:Product[],
}

const SubHeader = (prop:Props) => {

    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }


    const [flag, setflag] = useState (false)
    useEffect(() => {
        if(prop.products.length > 0){
            setflag(true)
        }
    }, [])

    return (

        <div>
              
        </div>
    )
}
export default SubHeader;