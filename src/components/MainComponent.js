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
                    if (item.apagado === 1) {
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
                                                <img key={image.id} src={image.url} alt=""  width="328px" height="180px" /> : null
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






/*
{
    "action":"Listing trilhas",
    "data":[
       {
          "id":1,
          "titulo":"Salto Ángel ou Cataratas Ángel",
          "descrip":"O Salto Ángel ou Cataratas Ángel é o mais alto salto do mundo, com 979 metros de altura, gerada pela queda do rio Churún desde o Auyantepui, no Estado de Bolívar, sudeste da Venezuela, próximo da fronteira Brasil-Guiana. Seu nome é alusivo ao aviador estado-unidense James Crawford Angel.",
          "clasifica":"1",
          "valor":20.15,
          "vagas":100,
          "nivelrisgo":1,
          "destino":"Parque Nacional de Canaima, Estado de Bolívar, Venezuela.",
          "publico":1,
          "status":1,
          "datai":"2022/11/01 08:00:00",
          "dataf":"2022/12/01 08:00:00",
          "apagado":0,
          "tblusuarioId":1,
          "createdAt":"2022-07-30T18:57:15.653Z",
          "updatedAt":"2022-07-30T18:57:15.653Z",
          "tblimages":[
             {
                "id":1,
                "url":"https://aguaxterra.com.br/wp-content/uploads/2019/11/cachoeira-mais-alta-do-mundo-2-768x412.jpg",
                "apagado":0,
                "tbltrilhaId":1,
                "createdAt":"2022-07-30T18:57:15.660Z",
                "updatedAt":"2022-07-30T18:57:15.660Z"
             },
             {
                "id":2,
                "url":"https://trilhandomontanhas.com/arquivos/2018-10/salto-angel-venezuela-media.jpg",
                "apagado":0,
                "tbltrilhaId":1,
                "createdAt":"2022-07-30T18:57:15.660Z",
                "updatedAt":"2022-07-30T18:57:15.660Z"
             }
          ]
       }
    ]
 }
*/









