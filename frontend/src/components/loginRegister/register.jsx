import axios from "axios";
import swal from "sweetalert";
import {
  Bienvenido,
  Boton,
  Cajainpu,
  Imgwanto,
  Input,
  Principal,
  Wanto,
} from "./styles/styledRegister";

import wanto from "../asset/Wanto.svg";
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import {  VITE_url_Backend,VITE_url_fronten } from "../home/home";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      email === "" ||
      password === "" ||
      name === "" ||
      lastname === "" ||
      number === ""
    ) {
      swal({
        title: "Enter information in the form",
        icon: "error",
        button: "Try again",
      });
      return;
    }
    else {
      swal({
        title: "correctly stored information",
        icon: "success",
        button: "back to login",
      }).then((confirm) => {
        if (confirm) {
          window.location.href = `${VITE_url_fronten}/login`;
        }
      });
    }
    try {
      const response = await axios.post(`${VITE_url_Backend}/register`, {
        correo: email,
        contraseña: password,
        nombre: name,
        apellido: lastname,
        telefono: number,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cone = () => {
    try {
      window.location.href = `${VITE_url_fronten}/login`;
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Principal>
      <Bienvenido>
        <FiChevronLeft onClick={cone} className="atras" />
      </Bienvenido>
      <Wanto>
        <Imgwanto src={wanto} alt="wanto" />
      </Wanto>
      <Cajainpu>
        <form>
          <Input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ""))}
            required
          />
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input type="password" placeholder="Confirm Password" required />
          <Boton onClick={handleSubmit}>
            <h2>Sign Up</h2>
          </Boton>
        </form>
      </Cajainpu>
    </Principal>
  );
};

export default Register;