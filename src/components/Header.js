import React from "react";
import "../assets/styles2.css";
import {Link} from 'react-router-dom';


function Header() {
return (
  <div className='main'>
        <div className="overlay"></div>
        <video src="https://prod-streaming-video-msn-com.akamaized.net/278b1c4f-3545-422c-9d56-242f18adadc9/2e3d6097-b233-40af-88f4-a90a74a33fa0.mp4" autoPlay loop muted />
        <div className="content">
            <h1>Aventureiros</h1>
            <p>Pronto para uma trilha?</p>
        </div>
        <div className="content2">
            <Link to="/dashboard" >
                Painel de Controle
            </Link>
        </div>
    </div>
);
}

export default Header;