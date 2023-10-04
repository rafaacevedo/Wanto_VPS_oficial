/* eslint-disable no-constant-condition */
import { Maincontainer, Tittle, ContainerInfoUser,  InfoName, InfoUser, ContainerMainUser, ChangePassword, Header } from "./styledProfile";
import { useEffect, useState } from "react";
import { useNavigate }         from 'react-router-dom'
import { BiSolidEdit }         from "react-icons/bi";
import { RiDeleteBin5Line }    from "react-icons/ri";
import { TbLogout }            from "react-icons/tb";
import { FiChevronLeft }       from "react-icons/fi";
import { VITE_url_fronten }    from "../home/home";
import  Wanto                  from "../asset/Wanto.svg";
import  perfilfinal            from "../asset/perfilfinal.png";
import swal from "sweetalert";
import axios from "axios";


const Profile = () => {
    const [, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
    if (localStorage.getItem("accessToken")) {
        setLoading(false);
    } else {
        navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        const token = localStorage.getItem("accesstoken")
        console.log("esto es el token", token);
    console.log(token);

    const ret = () => {
        try {
            (window.location.href =`${VITE_url_fronten}/home`);
        } catch (error) {
            alert(error)
        }
        }
        
    const edit = () => {
        try {
            window.location.href = `${VITE_url_fronten}/editprofile`;
        } catch (error) {
            alert(error);
        }
        };

        const [/* error */, setError] = useState()
        const [perfil, setPerfil] = useState({
            correo:"",
            contraseña:"",
            nombre:"",
            apellido:"",
            telefono:""
        })

        useEffect(() => {
            async function fetchOneClients() {
                try {
                const response = await axios.get(
                    `http://localhost:3005/aut`,
                    {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                    }
                );
                setPerfil(response.data);
                } catch (error) {
                setError(error);
                }
            }
        
            fetchOneClients();
            }, [token]);
        

    return (
        <Maincontainer>

            <Header>
                <FiChevronLeft onClick={ret} className="volver"/>
                <Tittle src={Wanto}alt="Wanto"/> 
                <FiChevronLeft className="invisible"/>
            </Header>

            <ContainerInfoUser> 
                <InfoUser src={perfilfinal} alt="perfilfinal"/> 
                <InfoName>
                    <h2>  {perfil.nombre} {perfil.apellido} </h2>
                    <h3> {perfil.correo} </h3>
                </InfoName>
            </ContainerInfoUser>

            <ContainerMainUser>
                <ChangePassword onClick={edit}>
                    <BiSolidEdit className="icono"/><h2> Edit Profile </h2>
                </ChangePassword>
                <ChangePassword>
                    <RiDeleteBin5Line className="icono"/><h2> Delete Account </h2>
                </ChangePassword>
                <ChangePassword  onClick={() => {
                if (true) {
                swal({
                    title: "¿Seguro que quieres salir?",
                    buttons: true,
                }).then((confirm) => {
                    if (confirm) {
                    localStorage.removeItem("accessToken");
                    window.location.href = `${VITE_url_fronten}/login`;
                    }
                });
                }
            }} >
                    <TbLogout className="icono"/><h2> Logout </h2>
                </ChangePassword>
            </ContainerMainUser>
        </Maincontainer>
    );
};

export default Profile;


