import React from 'react';
import '../styles/Hero.css';
import background from '../assets/img/background4.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img  className="hero-img" src={background} alt="imagem de fundo da hero" />
            <p className="hero-description">
                Bem vindo ao <span className="invest">Investigation Cases!</span> Aqui você pode visualizar os casos de investigação.
            </p>
        </div>
    );
};

export default Hero;