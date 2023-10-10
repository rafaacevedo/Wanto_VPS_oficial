import{ Bienvenido, Boton, Cajainput, Checkbox, Contaimput, Forgot, Imgwanto, Input, Principal, Remenber, Wanto,Cajaaa } from "./styles/styledLogin";
import wanto from "../asset/Wanto.svg";
import{ useState } from "react";
import axios from "axios";
import { Link } from"react-router-dom"
import { VITE_url_fronten, VITE_url_Backend } from "../home/home";

const Login = () => {
  const [ correo, setCorreo ] = useState( "" );
  const [ contraseña, setContraseña ] = useState( "");
  const log = async ( evt ) => {
    evt.preventDefault();
      try {
        await axios.post(
          `${ VITE_url_Backend }/login`,
          {
            correo: correo,
            contraseña: contraseña
          }
        ).then(( response ) => {
          localStorage.setItem("accessToken", response.data);
          window.location.href = `${ VITE_url_fronten }/home`;
        });
      } catch ( error ) {
        alert( "Usuario y/o contraseña no válidos" );
      }
  };


  return(
    <Principal>
      <Bienvenido><h1>¡Welcome!</h1></Bienvenido>
      <Wanto>
        <Imgwanto src={ wanto }alt="wanto"></Imgwanto>
      </Wanto>
      <Contaimput>
        <Cajainput>  
          <Input type="text" 
          onChange={(e) =>setCorreo( e.target.value )} 
          placeholder="Email address"
          required/>
          
          <Input type="password"  
          onChange={(e) =>setContraseña( e.target.value )} 
          placeholder="Password"
          required/>
          <Cajaaa>
            <Forgot/>
            {/* <Forgot><Link to="/forgot" style={{ textDecoration:"none", color:"#000"}}><h5 style={{textDecoration:"none" }}>¿Forgot Password?</h5></Link></Forgot> */}
          </Cajaaa>
          <Remenber>
            <Checkbox type="checkbox"/>    
            <h6 className="remenber">Remenber Password</h6>
          </Remenber>
          <Boton onClick={ log }><h2>Sign In</h2></Boton>
          <Link to="/register" style={{ textDecoration:"none", color:"#000" }}>
            <p className="account">¿dont have account?</p></Link>
        </Cajainput>
      </Contaimput>
    </Principal>
  )}

export default Login 