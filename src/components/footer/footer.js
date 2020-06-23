import React from 'react';
import './footer.css';
import logoFooter from '../../assets/logo-footer.png';

export default function Footer(){
    return(
        <div className='footer-container'>
            <a href='/#'><img id='header-menu-logo' alt='' src={logoFooter}></img></a>
            <div>
                <p>
                    Empresa Junior de Design da UFG<br/>
                    Faculdade de Artes Visuais<br/>
                    Av. Esperança Sala 37 Campus <br/>
                    Samambaia, Goiânia - Go,<br/>
                    74690-900<br/>
                    <br/>
                    Telefone: (62) 98274-7296<br/>




                </p>

            </div>
                <p>
                    Qualquer dúvida, contate nosso:<br/>
            
            <div className='whatsappDiv'><a href='/#' >Whatsapp</a></div>
               
                    Conheça mais a gente:<br/>
                </p>
            <div>


            </div>

        </div>
    );
}