import React from "react";
import emailjs from '@emailjs/browser';
import "../assets2/styleemail.css";



export const Emailenvio = () => {

    const sendEmail = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_vhqwq9s','template_uzm578e',event.target,'QSu3QgpXWqSPGe-uJ')
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  
    return (
      <div className='container border'
      style={{marginTop: "40px", width:'40%', backgroundImage:`url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701308293.jpg')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      }}>
        <h1 style={{margin:'25px'}} className='title-form'>Fale Conosco</h1>
        <form id="form" style={{margin: "25px 85px 75px 100px"}} className='row' onSubmit={sendEmail}>
        
          <label for="username">Nome</label>
          <input type="text" name='user_name' className="form-control"/>
        
          <label>Email</label>
          <input type="email" name='user_email' className="form-control" />
          <hr />
  
          <label>Nome da trilha</label>
          <input type="text" name='user_trilha' className="form-control"/>
          <hr />
  
          <label>Numero de pessoas</label>
          <input type="text" name='user_pessoas'  className="form-control" />
          <hr />
  
          <label>Nos Escreva</label>
          <textarea name="user_message" id="" cols="30" rows="4" className="form-control"></textarea>
          <hr />
          <input
           type="submit" 
           value="Send" 
           className="form-control btn btn-primary"
           style={{marginTop: "15px"}}
           />

        </form>
      </div>

    );
    
  }

  export default Emailenvio;
  