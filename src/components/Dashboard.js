import React from "react";
import {Button} from 'react-bootstrap';
import { URLs, GET, DELETE, PUT, POST } from "../fetch-api/Api";
import "../assets/dashboard.css";


function Dashboard(){
    return(
        <div>
            
            <aside className="main-menu">
            <Button className='btn-criar-contacts' variant="success" size="lg" onClick={()=>console.log("click")}>
                Criar Contato
            </Button>
            </aside>
            <nav className="nav-header">
                dfdfd
            </nav>
            <div className="container-main">
                dfdfd
            </div>
        </div>
    );
}


export default Dashboard;