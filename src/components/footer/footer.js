import React from 'react';
import './footer.css';

import logoFooter from '../../assets/logo-footer.png';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import behance from '../../assets/behance.svg'

export default function Footer(){
    return(
        <div className='footer-container'>
            <a href='/#'><img id='footer-logo' alt='' src={logoFooter}></img></a>
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

            <div>
                <p>
                    Qualquer dúvida, contate nosso:<br/>
                </p>
                <div className='whatsappDiv'><a href='/#' >Whatsapp</a></div>
                <p>
                    Conheça mais a gente:<br/>
                </p>
                <a href='https://www.facebook.com/canindesign/' target="_blank" rel='noopener noreferrer'><img className='socialmedia facebook' src={facebook} alt='' /></a>
                <a href='https://www.instagram.com/canindesign/' target="_blank" rel='noopener noreferrer'><img className='socialmedia instagram' src={instagram} alt='' /></a>
                <a href='https://www.linkedin.com/company/canindesign/about/' target="_blank" rel='noopener noreferrer'><img className='socialmedia linkedin' src={linkedin} alt='' /></a>
                <a href='https://www.behance.net/canindesign' target="_blank" rel='noopener noreferrer'><img className='socialmedia behance' src={behance} alt='' /></a>
  
            </div>

        </div>
    );
}