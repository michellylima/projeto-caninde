import React from 'react';
import { Link } from 'react-router-dom';

import './header-menu.css';
import logoHeaderMenu from '../../assets/logo-header-menu.jpg';

export default function HeaderMenu(){
    return(
        <div className='header-menu-container'>
            <a href='/#'><img id='header-menu-logo' alt='' src={logoHeaderMenu}></img></a>
            <nav className='nav-bar'>
                <ul>
                    <li><Link to='/portfolio'>Portfólio</Link></li>
                    <li><Link to='/servicos'>Serviços</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
                
            </nav>
            <button style={{display: 'none'}}></button>
        </div>
    );
}