import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {Button, Form, Row, Col, Alert} from 'react-bootstrap';
import Moment from 'react-moment';
import { URLs, GET, DELETE, PUT, POST } from "../fetch-api/Api";
import "../assets/dashboard.css";
import MyVerticallyCenteredModal from './bootrap/ModalDashboard';
import Carousel from 'react-bootstrap/Carousel';
import { BsPlusSquareDotted, BsFillHouseDoorFill, BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    titulo: 
        yup.string()
        .required("Requerido!")
        .min(5,"Minimo 5 caracteres no titulo.")
        .max(100, "Maximo 100 caracteres no titulo."),
    descrip: 
        yup.string()
        .required("Requerido!")
        .min(20,"Minimo 20 caracteres de descricao.")
        .max(500, "Maximo 255 caracteres de descricao."),
    valor: 
        yup.number("Requerido!")
        .min(1, "Valor minimo e de 1 Reais")
        .max(1000, "Valor maximo e de 1000 Reais")
        .required("Requerido!")
        .positive("Valor teria que ser positivo."),
    vagas: yup.number("Requerido!")
        .min(1, "Minimo 1 Vaga.")
        .max(1000, "Maximo 1000 Vagas.")
        .required("Requerido!")
        .positive("O numero de vagas tem que ser positivo.")
        .integer("O numero de vagas tem que ser entero."),
    nivelrisgo: yup.number("Requerido!")
        .min(1, "Nivel errado.")
        .max(50, "Nivel errado.")
        .required("Requerido!"),
    destino: yup.string()
        .required("Requerido!")
        .min(5,"Minimo 5 caracteres no titulo.")
        .max(100, "Maximo 50 caracteres no titulo."),
    publico: yup.number("Requerido!")
        .min(0, "Error.")
        .max(1, "Error")
        .required("Requerido!"),
    status: yup.number("Requerido!")
        .min(1, "Error.")
        .max(4, "Error")
        .required("Requerido!"),
    datai: yup.date().default(() => new Date()),
    dataf: yup.date().default(() => new Date()),
    tblimages: yup.mixed().test('fileType', 'Tipo de imagen nao permitida.', (value)=>{
        let valid=false;
        if(value==null){
            return false;
        }
        if(value.length>0){ 
            for(let i=0; i<value.length; i++ ){
                if([
                    'image/png',
                    'image/jpg',
                    'image/pneg',
                    'image/jpeg',
                ].includes(value[i].type)){
                    valid=true;
                }else{
                    valid=false;
                    break;
                }  
            }
        }
        return valid;
    }).required()
});

function Dashboard(){
    const [listTrilhas, setListTrilhas] = useState([]);
    const [modalRead, setModalRead] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [loadingCadastro, setLoadingCadastro] = useState(false); 
    const [loadingUpdate, setLoadingUpdate] = useState(false); 
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [showAlertCadastro, setShowAlertCadastro] = useState(false); 
    const [showAlertUpdate, setShowAlertUpdate] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [readJson, setReadJson] = useState({
        titulo:'',
        tblimages:[]
    });
    const [deleteJson, setDeleteJson] = useState({id:null, titulo: null});
    const [updateJson, setUpdateJson] = useState({
        titulo: '',
        descrip:'',
        valor:29.99,
        vagas:1,
        nivelrisgo:1,
        destino:'',
        publico:1,
        status:1,
        datai:'2022-01-01',
        dataf:'2022-01-01',
        tblimages:null,
        apagaimg:[]
    });
    const schemaUpdate = yup.object().shape({
        titulo: 
            yup.string()
            .required("Requerido!")
            .min(5,"Minimo 5 caracteres no titulo.")
            .max(100, "Maximo 100 caracteres no titulo."),
        descrip: 
            yup.string()
            .required("Requerido!")
            .min(20,"Minimo 20 caracteres de descricao.")
            .max(500, "Maximo 255 caracteres de descricao."),
        valor: 
            yup.number("Requerido!")
            .min(1, "Valor minimo e de 1 Reais")
            .max(1000, "Valor maximo e de 1000 Reais")
            .required("Requerido!")
            .positive("Valor teria que ser positivo."),
        vagas: yup.number("Requerido!")
            .min(1, "Minimo 1 Vaga.")
            .max(1000, "Maximo 1000 Vagas.")
            .required("Requerido!")
            .positive("O numero de vagas tem que ser positivo.")
            .integer("O numero de vagas tem que ser entero."),
        nivelrisgo: yup.number("Requerido!")
            .min(1, "Nivel errado.")
            .max(50, "Nivel errado.")
            .required("Requerido!"),
        destino: yup.string()
            .required("Requerido!")
            .min(5,"Minimo 5 caracteres no titulo.")
            .max(100, "Maximo 50 caracteres no titulo."),
        publico: yup.number("Requerido!")
            .min(0, "Error.")
            .max(1, "Error")
            .required("Requerido!"),
        status: yup.number("Requerido!")
            .min(1, "Error.")
            .max(4, "Error")
            .required("Requerido!"),
        datai: yup.date().default(() => new Date()),
        dataf: yup.date().default(() => new Date()),
        tblimages: yup.mixed().test('fileType', 'Tipo de imagen nao permitida.', (value)=>{
            let valid=false;
    
            //si la cantidad de imagenes a apagar es mayor o igual a las que el trajo y no hay imagenes a cargar devuelve false
            if((updateJson.apagaimg.length===updateJson.tblimages.length)&&value===null){
                return false;
            }
    
            if(value!=null){
                if(value.length>0){ 
                    for(let i=0; i<value.length; i++ ){
                        if([
                            'image/png',
                            'image/jpg',
                            'image/pneg',
                            'image/jpeg',
                        ].includes(value[i].type)){
                            valid=true;
                        }else{
                            valid=false;
                            break;
                        }  
                    }
                }
            }else{
                valid = true;
            }
            return valid;
        })
    });

    useEffect(()=>{
        GET(URLs.getTrilhasAll)
        .then((res)=>{
            setListTrilhas(res.data);
        });
    },[]);

    const fechaAbreMenu = ()=>{
        setShowMenu((showMenu)=>!showMenu);
    }

    const hiddenModalRead = ()=>{
        setModalRead(false);
    }

    const hiddenModalCreate = ()=>{
        setModalCreate(false);
    }

    const hiddenModalUpdate = ()=>{
        setModalUpdate(false);
    }
    
    const actionRead = (data) =>{
        setModalRead(true);
        setReadJson(data);
    }

    const actionDelete = (data) =>{
        setModalDelete(true);
        setDeleteJson(data);
    }

    const actionCreate = () =>{
        setModalCreate(true);
    }

    const actionUpdate = (data) =>{
        setShowAlertUpdate(false);
        setModalUpdate(true);
        setUpdateJson((updateJson)=>{
            return {...updateJson, ...data, apagaimg:[]}
        });
    }

    const actionUpdateImagen = (idImg, evt) =>{
        evt.target.parentElement.remove();
        setUpdateJson((updateJson)=>{
            return {...updateJson, apagaimg:[...updateJson.apagaimg, idImg]}
        });
    }

    const deletarTrilha=(action)=>{
        if (action) {
            setLoadingDelete(true);
            DELETE(URLs.deleteTrilha,deleteJson)
            .then((res)=>{
                setShowAlertCadastro(false);
                setLoadingDelete(false);
                setModalDelete(false);
                setListTrilhas(res.data);
            });
        } else {
            setModalDelete(false);
        }
    }

    //formalio de cadastro
    const cadastrarTrilhas = (data, funciones)=>{
        setLoadingCadastro(true);
        let Formulario= new FormData();
        if(data.tblimages!=null){
            if(data.tblimages.length>0){ 
                for(let i=0; i<data.tblimages.length; i++ ){
                    Formulario.append("tblimages", data.tblimages[i]);
                }
            } 
        }
        Formulario.append("data", JSON.stringify(data));
        POST(URLs.getTrilhasAll,Formulario)
        .then((res)=>{
            setShowAlertCadastro(true);
            setTimeout(()=>{
                setShowAlertCadastro(false);
            }, 3000);
            setLoadingCadastro(false);
            funciones.resetForm();
            setListTrilhas(res.data);
        });
    }

    const atualizarTrilhas = (data, funciones) =>{
        setLoadingUpdate(true);
        setLoadingUpdate(true);
        let Formulario= new FormData();
        if(data.tblimages!=null){
            if(data.tblimages.length>0){ 
                for(let i=0; i<data.tblimages.length; i++ ){
                    Formulario.append("tblimages", data.tblimages[i]);
                }
            } 
        }
        Formulario.append("data", JSON.stringify({...data, apagaimg:[...updateJson.apagaimg]}));
        PUT(URLs.getTrilhasAll,Formulario)
        .then((res)=>{
            setShowAlertUpdate(true);
            setTimeout(()=>{
                setShowAlertUpdate(async (ShowAlertUpdate)=>{
                    await setModalUpdate(false);
                    return false;
                });
            }, 4000);
            setLoadingUpdate(false);
            setListTrilhas(res.data);
        });
    }

    const formatData=(fecha, formik=false)=>{
        const addZero=(numero)=>{
            if (numero <= 9) 
                return "0" + numero;
            else
                return numero; 
        }
        const date= new Date(fecha);
        const dia=addZero(date.getDate().toString());
        const mes=addZero((date.getMonth()+1).toString());
        const ano=addZero(date.getFullYear().toString());
        return formik?`${ano}-${mes}-${dia}`:`${dia}/${mes}/${ano}`;
    }

    
    return(
    <>  
        <MyVerticallyCenteredModal
            type={"DELETE"}
            title={"Apagar"}
            subtitle={loadingDelete?null:"Você realmente deseja excluir a trilha?"}
            message={loadingDelete?<div className="loading"></div>:<p>{`Você excluirá a trilha de titulo : "`}<strong>{deleteJson.titulo}</strong>{`" clica no botão `}<strong>{`"Concordo"`}</strong>{` se você realmente deseja excluí-lo.`}</p>}
            show={modalDelete}
            onHide={deletarTrilha}
        />
        <MyVerticallyCenteredModal
            type={"UPDATE"}
            title={"Atualizar trilha"}
            subtitle={""}
            message={loadingUpdate?
                <div className="loading"></div>:
                <>{showAlertUpdate?<Alert variant="success">
                        <Alert.Heading>Show!</Alert.Heading>
                        <p>
                        Trilha foi atualizada com sucesso.
                        </p>
                    </Alert>:null}
                {showAlertUpdate?null:<Formik
                    validationSchema={schemaUpdate}
                    onSubmit={atualizarTrilhas}
                    initialValues={{
                        id:updateJson.id,
                        titulo: updateJson.titulo,
                        descrip: updateJson.descrip,
                        valor: updateJson.valor,
                        vagas: updateJson.vagas,
                        nivelrisgo: updateJson.nivelrisgo,
                        destino: updateJson.destino,
                        publico: updateJson.publico,
                        status: updateJson.status,
                        datai: formatData(updateJson.datai, true),
                        dataf: formatData(updateJson.dataf, true),
                        tblimages: null,
                    }}>

                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="titulo">
                                <Form.Label>Titulo *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="titulo"
                                    placeholder="Titulo da trilha..."
                                    value={values.titulo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.titulo}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.titulo}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="descrip">
                                <Form.Label>Descricao *</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    type="text"
                                    name="descrip"
                                    placeholder="Descricao..."
                                    value={values.descrip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.descrip}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.descrip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="destino">
                                <Form.Label>Endereco *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="destino"
                                    placeholder="Endereco de destino..."
                                    value={values.destino}
                                    onChange={handleChange}
                                    isInvalid={!!errors.destino}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.destino}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="valor">
                                <Form.Label>Valor da trilha *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="valor"
                                    placeholder="Data de inicio..."
                                    value={values.valor}
                                    onChange={handleChange}
                                    isInvalid={!!errors.valor}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.valor}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="vagas">
                                <Form.Label>Numero de vagas *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="vagas"
                                    placeholder="Numero de vagas..."
                                    value={values.vagas}
                                    onChange={handleChange}
                                    isInvalid={!!errors.vagas}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.vagas}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="nivelrisgo">
                                <Form.Label>Risgo *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="nivelrisgo"
                                    value={values.nivelrisgo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.nivelrisgo}
                                >
                                    <option value="1">Baixo</option>
                                    <option value="2">Medio</option>
                                    <option value="3">Alto</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.nivelrisgo}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="publico">
                                <Form.Label>Publicado *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="publico"
                                    value={values.publico}
                                    onChange={handleChange}
                                    isInvalid={!!errors.publico}
                                >
                                    <option value="1">Sim</option>
                                    <option value="0">Nao</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.publico}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="status">
                                <Form.Label>Status *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="status"
                                    value={values.status}
                                    onChange={handleChange}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="1">Disponivel</option>
                                    <option value="2">Iniciado</option>
                                    <option value="3">Cancelado</option>
                                    <option value="4">Pausado</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.status}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="datai">
                                <Form.Label>Data de inicio.</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="datai"
                                    placeholder="Data de inicio..."
                                    value={values.datai}
                                    onChange={handleChange}
                                    isInvalid={!!errors.datai}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.datai}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="dataf">
                                <Form.Label>Data final.</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataf"
                                    placeholder="Data final da trilha..."
                                    value={values.dataf}
                                    onChange={handleChange}
                                    isInvalid={!!errors.dataf}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dataf}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group  as={Col} md="12" controlId="images">
                                <Form.Label>Imagens *</Form.Label>
                                <Form.Control
                                type="file"
                                required
                                name="tblimages"
                                multiple={true}
                                isInvalid={!!errors.tblimages}
                                onChange={(event) => {
                                    setFieldValue("tblimages", event.currentTarget.files);
                                }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.tblimages}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="rowImages">
                                {updateJson.tblimages.length>0?
                                    updateJson.tblimages.map((img)=>{
                                        return (<div key={img.id} className="containerImgDelete">
                                            <span className="deleteImage" onClick={(evt)=>actionUpdateImagen(img.id, evt)}>X</span>
                                            <img width={50} height={50}  src={img.url.includes("http")?img.url:URLs.urlImages+img.url} alt="Image" title="Image" />
                                        </div>)
                                    }):null                                    
                                }
                            </div>
                        </Row>
                        <br />
                        <div style={{display:'block'}}>
                            <Button type="submit" variant="primary" size="lg" style={{width:'100%'}}>Atualizar</Button>
                        </div>
                        
                        </Form>
                    )}
                </Formik>}
                </>
            }
            show={modalUpdate}
            onHide={hiddenModalUpdate}
        />
        <MyVerticallyCenteredModal
            type={"CREATE"}
            title={"Criar trilha"}
            subtitle={""}
            message={loadingCadastro?
                <div className="loading"></div>:
                <>{showAlertCadastro?<Alert variant="success">
                        <Alert.Heading>Show!</Alert.Heading>
                        <p>
                        Trilha cadastrada com sucesso.
                        </p>
                    </Alert>:null}
                <Formik
                    validationSchema={schema}
                    onSubmit={cadastrarTrilhas}
                    initialValues={{
                        titulo: '',
                        descrip:'',
                        valor:29.99,
                        vagas:1,
                        nivelrisgo:1,
                        destino:'',
                        publico:1,
                        status:1,
                        datai:'2022-01-01',
                        dataf:'2022-01-01',
                        tblimages:null
                    }}>

                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="titulo">
                                <Form.Label>Titulo *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="titulo"
                                    placeholder="Titulo da trilha..."
                                    value={values.titulo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.titulo}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.titulo}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="descrip">
                                <Form.Label>Descricao *</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    type="text"
                                    name="descrip"
                                    placeholder="Descricao..."
                                    value={values.descrip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.descrip}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.descrip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="destino">
                                <Form.Label>Endereco *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="destino"
                                    placeholder="Endereco de destino..."
                                    value={values.destino}
                                    onChange={handleChange}
                                    isInvalid={!!errors.destino}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.destino}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="valor">
                                <Form.Label>Valor da trilha *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="valor"
                                    placeholder="Data de inicio..."
                                    value={values.valor}
                                    onChange={handleChange}
                                    isInvalid={!!errors.valor}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.valor}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="vagas">
                                <Form.Label>Numero de vagas *</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="vagas"
                                    placeholder="Numero de vagas..."
                                    value={values.vagas}
                                    onChange={handleChange}
                                    isInvalid={!!errors.vagas}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.vagas}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="nivelrisgo">
                                <Form.Label>Risgo *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="nivelrisgo"
                                    value={values.nivelrisgo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.nivelrisgo}
                                >
                                    <option value="1">Baixo</option>
                                    <option value="2">Medio</option>
                                    <option value="3">Alto</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.nivelrisgo}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="publico">
                                <Form.Label>Publicado *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="publico"
                                    value={values.publico}
                                    onChange={handleChange}
                                    isInvalid={!!errors.publico}
                                >
                                    <option value="1">Sim</option>
                                    <option value="0">Nao</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.publico}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group as={Col} md="12" controlId="status">
                                <Form.Label>Status *</Form.Label>
                                <Form.Control
                                    as = "select"
                                    type="select"
                                    name="status"
                                    value={values.status}
                                    onChange={handleChange}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="1">Disponivel</option>
                                    <option value="2">Iniciado</option>
                                    <option value="3">Cancelado</option>
                                    <option value="4">Pausado</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.status}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="datai">
                                <Form.Label>Data de inicio.</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="datai"
                                    placeholder="Data de inicio..."
                                    value={values.datai}
                                    onChange={handleChange}
                                    isInvalid={!!errors.datai}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.datai}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="dataf">
                                <Form.Label>Data final.</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataf"
                                    placeholder="Data final da trilha..."
                                    value={values.dataf}
                                    onChange={handleChange}
                                    isInvalid={!!errors.dataf}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dataf}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-1">
                            <Form.Group  as={Col} md="12" controlId="images">
                                <Form.Label>Imagens *</Form.Label>
                                <Form.Control
                                type="file"
                                required
                                name="tblimages"
                                multiple={true}
                                isInvalid={!!errors.tblimages}
                                onChange={(event) => {
                                    setFieldValue("tblimages", event.currentTarget.files);
                                }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.tblimages}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <br />
                        <div style={{display:'block'}}>
                            <Button type="submit" variant="primary" size="lg" style={{width:'100%'}}>Salvar</Button>
                        </div>
                        
                        </Form>
                    )}
                </Formik>
                </>
            }
            show={modalCreate}
            onHide={hiddenModalCreate}
        />
        <MyVerticallyCenteredModal
            type={"READ"}
            title={readJson.titulo}
            subtitle={""}
            message={
                <div style={{textAlign:'justify', textIndent:5}}>
                    <p><b>Publicado</b> : {readJson.publico===1?'Sim':'Nao'} &nbsp;<b>Destino</b> : {readJson.destino!=null?readJson.destino:null}</p>
                    <p>{readJson.descrip}</p>
                    {readJson.tblimages.length>0?
                    <Carousel>
                        {readJson.tblimages.map((item, index)=>{
                            return (
                                <Carousel.Item key={item.id}>
                                    <img
                                    className="d-block w-100"
                                    src={item.url.includes("http")?item.url:URLs.urlImages+item.url}
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
        <div style={{backgroundColor: '#fff'}}>
            <aside className={`main-menu elevation-4 ${showMenu?"":"menu-fechado"}`}>
            <Link to="/" className="brand-link" >
                <span className="brand-text font-weight-light">Aventureiros</span>
            </Link>
            <hr style={{color:'#eee'}} />
            <Link to="/" className="brand-link link-menu" >
                <BsFillHouseDoorFill color="#fff" />&nbsp;<span className="brand-text font-weight-light">Home</span>
            </Link>
            </aside>
            <nav className={`nav-header ${showMenu?"":"menu-fechado-icone"}`}>
                <span  className="btnMenuAmburger">
                {showMenu?<BsArrowBarLeft size={30} id="fecha-menu" onClick={fechaAbreMenu} />:
                    <BsArrowBarRight size={30} id="abre-menu" onClick={fechaAbreMenu} />}
                </span>
                
            </nav>
            <div className={`container-main ${showMenu?"":"menu-fechado-icone"}`}>
                <div className="container-table">
                    <div className='row-table' >
                        <div className='text-left '>
                            <BsPlusSquareDotted onClick={actionCreate} color="green" size={30} style={{cursor:'pointer'}} />
                        </div>
                        <div className='limit-tex text-left'>
                            Titulo
                        </div>
                        <div className='limit-tex text-left' >
                            Valor
                        </div>
                        <div className='limit-tex text-left' >
                            Data de Inicio
                        </div>
                        <div className='limit-tex text-left' >
                            Data Fin
                        </div>
                        <div className='limit-tex text-left' >
                           Opcoes
                        </div>
                    </div>
                    {listTrilhas!==undefined && listTrilhas.length>0?listTrilhas.map(function (data){
                    return (
                    <div key={data.id} className='row-table'>
                        <div style={{cursor:'pointer'}} onClick={(e)=>{actionRead(data)}}>
                            <img style={data.publico===1?null:{border:'solid red 3px'}} src={data.tblimages[0].url.includes("http")?data.tblimages[0].url:URLs.urlImages+data.tblimages[0].url} alt={"data.name"} title={"data.name"} />
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
                                <svg onClick={()=>actionUpdate(data)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </div>
                            <div className='icon-apagar'>
                                <svg onClick={(e)=>{actionDelete(data)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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