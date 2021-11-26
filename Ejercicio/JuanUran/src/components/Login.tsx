import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import useAuth from '../hook/useAuth';
import Layout from './Layout';

const Login = () => {

    const history = useHistory();
    const { loginUser } = useAuth();
    const [user, setUser] = useState<any>({});

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (user.username == "juanuran" && user.password == "1234") {
            loginUser(user);
            history.push('/marketplace');
        } else {
            alert("Usuario No valido");
        }


    };

    return (
        <Layout>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Ingrese su usuario"
                            onChange={(e) => setUser({ ...user, ["username"]: e.target.value })}/> <br />
                        <input type="text" placeholder="Ingrese su contraseña" className="mt-3"
                            onChange={(e) => setUser({ ...user, ["password"]: e.target.value })} /> <br />
                        <button type="submit" className="mt-3">Ingresar</button>
                    </form>
        </Layout>

    )
}

export default Login;
