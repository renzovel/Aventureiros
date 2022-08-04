import React from 'react';
import "../assets/styles.css";
import {Link} from 'react-router-dom';
import { URLs } from "../fetch-api/Api";



export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { user: null };
    }
    componentDidMount() {
        //guardamos el this de la clase en otra variable para poder usarlo dentro de fetch
        var _this = this;
        fetch(URLs.getTrilhasAll)
            .then(response => response.json())
            .then((user) => {
                const trilhas = user.data.map((item, index) => {
                    //verifica si la trilha esta o no eliminada
                    if (item.apagado == 1 || item.publico == 0) {
                        return null;
                    } else {
                        //vamos almacenando las trilhas
                        return (
                            <section className='container0'>
                            <div className='card'>
                            <Link to="/Emailenvio" target="_blank" without rel="noreferrer">
                            <a href={URLs.urlEmailEnvio} target="_blank" without rel="noreferrer">
                                <div className='card-image car-1'>
                                {item.tblimages.length > 0 ?
                                    item.tblimages.map((image) => {
                                        //verifica si la imagen esta o no eliminada
                                        if (image.apagado === 1)
                                            return null
                                        else
                                            return image.apagado === 0 ?
                                                <img key={image.id} src={image.url.includes("http")?image.url:URLs.urlImages+image.url} alt=""  width="328px" height="180px" /> : null
                                    }) : null}
                                </div>
                                <h1>Titulo : {item.titulo}</h1>
                                <p>Descricao : {item.descrip}</p>
                                <p>Destino : {item.destino}</p>
                                <p>Data de inicio : {item.datai}</p>
                                <p>Data fin : {item.dataf}</p>
                                
                                </a>
                                </Link>
                            </div> 
                                


                            </section>

                     
                           
                        )
                    }
                });
                _this.setState({ user: trilhas });
            })
    }
    render() {
        const user = this.state.user;
        //mostra el contenido despues de haber sido creado
        return user ? user : null;
        
    }
  

}







