import { Link } from "react-router-dom";
import {  } from "./Landing.css"; 


const Landing = () => {
    return(
        <div className="container">
        <h1 className="titulo">It's time to play</h1>
        <Link className="linker" to="/home" ><button className="buttonL" >Get started</button></Link>
       </div>

    );
}

export default Landing;