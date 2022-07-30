import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { URLs, GET, DELETE, PUT, POST } from "../fetch-api/Api";
import "../assets/dashboard.css";


function Dashboard(){
    return(
        <div>
            <aside className="main-menu">
            <Link to="/" >
                <Button className='btn-criar-contacts' variant="success" size="lg" onClick={()=>console.log("click")}>
                    Criar Contato
                </Button>
            </Link>
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