import React, { useState } from "react";
import useAuth from "../hook/useAuth";
import { useHistory } from "react-router-dom"

const Login = () => {

    const history = useHistory();
    const { loginUser } = useAuth();

    const [user, setUser] = useState<any>({});

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (user.username == "Juan" && user.password == "123") {
            loginUser(user);
            history.push('/Market');
        } else {
            alert("Usuario No valido");
        }


    };

    return (
        <>
            <h1>Por favor Ingrese para ver el MarketPlace</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Usuario"
                    onChange={(e) => setUser({ ...user, ["username"]: e.target.value })}
                />
                <input
                    placeholder="password"
                    type="password"
                    onChange={(e) => setUser({ ...user, ["password"]: e.target.value })}
                />
                <button>Ingresar</button>
            </form>
        </>
    );
};

export default Login;