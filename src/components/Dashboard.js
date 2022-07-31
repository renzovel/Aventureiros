import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Moment from 'react-moment';
import { URLs, GET, DELETE, PUT, POST } from "../fetch-api/Api";
import "../assets/dashboard.css";
import MyVerticallyCenteredModal from './bootrap/ModalDashboard';
import Carousel from 'react-bootstrap/Carousel';
import { BsPlusSquareDotted } from 'react-icons/bs';


function Dashboard(){
    const [listTrilhas, setListTrilhas] = useState([]);
    const [modalRead, setModalRead] = useState(false);
    const [readJson, setReadJson] = useState({
        titulo:'',
        tblimages:[]
    });
    useEffect(()=>{
        GET(URLs.getTrilhasAll)
        .then((res)=>{
            setListTrilhas(res.data);
        });
    },[]);

    const hiddenModalRead = ()=>{
        setModalRead(false);
    }
    
    const actionRead = (data) =>{
        setModalRead(true);
        setReadJson(data);
    }



    
    return(
    <>
        <MyVerticallyCenteredModal
            type={"READ"}
            title={readJson.titulo}
            subtitle={""}
            message={
                <div style={{textAlign:'justify', textIndent:5}}>
                    <p><b>Publicado</b> : {readJson.publico==1?'Sim':'Nao'}</p>
                    <p>{readJson.descrip}</p>
                    {readJson.tblimages.length>0?
                    <Carousel>
                        {readJson.tblimages.map((item, index)=>{
                            return (
                                <Carousel.Item key={item.id}>
                                    <img
                                    className="d-block w-100"
                                    src={item.url}
                                    alt={readJson.titulo}
                                    height={400}
                                    />
                                    <Carousel.Caption>
                                    <h3>Aventureros</h3>
                                    <p>{readJson.titulo}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>:null}
                </div>
            }
            show={modalRead}
            onHide={hiddenModalRead}
        />
        <div>
            <aside className="main-menu">
            <Link to="/" >
                <Button className='btn-criar-contacts' variant="success" size="lg" onClick={()=>console.log("click")}>
                    Home
                </Button>
            </Link>
            </aside>
            <nav className="nav-header">
                dfdfd
            </nav>
            <div className="container-main">
                <div className="container-table">
                    <div className='row-table'>
                        <div className='text-left '>
                            <BsPlusSquareDotted color="green" size={30} style={{cursor:'pointer'}} />
                        </div>
                        <div className='limit-tex text-center'>
                            Titulo
                        </div>
                        <div className='limit-tex text-center' >
                            Valor
                        </div>
                        <div className='limit-tex text-center' >
                            Data de Inicio
                        </div>
                        <div className='limit-tex text-center' >
                            Data Fin
                        </div>
                        <div className='limit-tex text-center' >
                           Opcoes
                        </div>
                    </div>
                    {listTrilhas.length>0?listTrilhas.map(function (data){
                    return (
                    <div key={data.id} className='row-table'>
                        <div style={{cursor:'pointer'}}>
                            <img src={data.tblimages[0].url} alt={"data.name"} title={"data.name"} />
                        </div>
                        <div className='limit-tex capitalize'  style={{maxWidth: '30%'}}>
                            {data.titulo}
                        </div>
                        <div className='limit-tex' >
                            {data.valor} R
                        </div>
                        <div className='limit-tex' >
                            <Moment format="DD/MM/YYYY">
                                {data.datai}
                            </Moment>
                        </div>
                        <div className='limit-tex lowercase' >
                            <Moment format="DD/MM/YYYY">
                                {data.dataf}
                            </Moment>
                        </div>
                        <div className='content-icon'>
                            <div className='icon-editar'>
                                <svg onClick={(e)=>{actionRead(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </div>
                            <div className='icon-apagar'>
                                <svg onClick={(e)=>{console.log(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </div>
                    </div>)
                    }): <div className='alert-cadastra'>Cadastra uma nova aventura.</div>}
                </div>
            </div>
        </div>
    </>);
}


export default Dashboard;