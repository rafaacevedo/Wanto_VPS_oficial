import axios from "axios";
import "../../index.css";
import { Cartas, Contenedor, ContenedorBotones, Header, HeaderCartas, Iconos, Info, Invisible, Principal, } from "./styledHome";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { SlLogout } from "react-icons/sl";
import { BsDisplay } from "react-icons/bs";
import { RiRestartFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiStop } from "react-icons/hi";
import { BsToggle2Off } from "react-icons/bs";
import { RiInstallFill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import swal from "sweetalert";

const Home = () => {
  const [data, setData] = useState([]);
  const [/* loading, */ setLoading] = useState(true);
  const [/* error,  */ setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3005/api/data");

        if (Array.isArray(response.data.data)) {
          // Verifica si los datos son un array
          setData(response.data.data);
          console.log(response.data.data);
        } else {
          // Los datos no son un array válido, maneja este caso según tus necesidades
          setError("Los datos no son un array válido");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [setLoading,setError]);

  const ret = () => {
    try {
      window.location.href = "http://localhost:5173/profile";
    } catch (error) {
      alert(error);
    }
  };

  const detenerMaquina = async (instanceId) => {
    try {
      await axios.post(`http://localhost:3005/api/stop/${instanceId}`);
      
    } catch (error) {
      console.error('Error al detener la máquina virtual:', error);
    }
  };
  

  return (
    <Principal>
      <Header>
        <BiSolidUserCircle onClick={ret} className="User" />
        <h1>Control-Vps</h1>
        <SlLogout
          onClick={() => {
            // eslint-disable-next-line no-constant-condition
            if (true) {
              swal({
                title: "¿Seguro que quieres salir?",
                buttons: true,
              }).then((confirm) => {
                if (confirm) {
                  window.location.href = "http://localhost:5173/login";
                }
              });
            }
          }}
          className="Log-out"
        />
      </Header>
      <Invisible />
      <Contenedor>
        {data.length > 0 ? (
          <>
            {data.map((instance) => (
              <Cartas key={instance.instanceId}>
                <HeaderCartas>
                  {data.map((instance) => (
                    <div key={instance.instanceId} className="titulo">
                      <h1 className="titulo">{instance.ipConfig.v4.ip}</h1>
                    </div>
                  ))}
                </HeaderCartas>
                <Iconos>
                  <ContenedorBotones>
                    <BsDisplay className="Status" />
                    <BsFillPlayCircleFill className="Start" />
                    <RiRestartFill className="Restart" />
                    <HiStop className="Stop"  onClick={()=>{
                      detenerMaquina()
                    }}/>
                    <BsToggle2Off className="Cloud-Init" />
                    <RiInstallFill className="Reinstall" />
                    <IoIosSave className="Rescue" />
                    <FaHistory className="Snap-Shots" />
                  </ContenedorBotones>
                  <PiComputerTowerFill className="pc" style={instance.status === "running" ? { fill: "#5C8E24" } : { fill: "grey" }} />
                </Iconos>
                <Info>
                  {data.map((instance) => (
                    <div key={instance.instanceId} className="info">
                      <h2>Información:</h2>
                      <Info>
                        <h3>Nombre: </h3>
                        <p>{instance.name}</p>
                      </Info>
                      <Info>
                        <h3>OsType: </h3>
                        <p>{instance.osType}</p>
                      </Info>
                      <Info>
                        <h3>Instancia Id: </h3>
                        <p>{instance.instanceId}</p>
                      </Info>
                      <Info>
                        <h3>Region: </h3>
                        <p>{instance.regionName}</p>
                      </Info>
                      <Info>
                        <h3>RamMb: </h3>
                        <p>{instance.ramMb}</p>
                      </Info>
                      <Info>
                        <h3>Instancia Ip: </h3>
                        <p>{instance.ipConfig.v4.ip}</p>
                      </Info>
                      <Info>
                        <h3>Status: </h3>
                        <p>{instance.status}</p>
                      </Info>
                    </div>
                  ))}
                </Info>
              </Cartas>
            ))}
          </>
        ) : (
          <>
            <div className="loading">
              <Spinner className="spinner" />
            </div>
          </>
        )}
      </Contenedor>
    </Principal>
  );
};

export default Home;
