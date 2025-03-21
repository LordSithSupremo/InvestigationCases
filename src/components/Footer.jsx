import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='txt'>© 2025 Investigation Cases. Um projeto desenvolvido por Caique Emanuel. Todos os direitos reservados.</p>
            <div className='social-icons'>
                <a href='https://facebook.com' className='icon facebook'>Facebook</a>
                <a href='https://twitter.com' className='icon twitter'>Twitter</a>
                <a href='https://instagram.com' className='icon instagram'>Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;