import React, { useState } from "react";
import useAuth from "../hook/useAuth";
import { useHistory } from "react-router-dom"


const LoginPage = () => {

  const history = useHistory();
  const { loginUser } = useAuth();

  const [user, setUser] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(user.username == "yeferson" && user.password == "123") {
        loginUser(user);
        history.push('/');
    } else {
        alert("Usuario No valido");
    }

  };

  return (
  <div className="centrar">

      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Concesionario Zuluaga</h5>
          <h6 className="card-subtitle mb-2 text-muted">Por favor ingrese su usuario :</h6>
          
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
        </div>
      </div>
  </div>
  );
};
export default LoginPage;

