import React from 'react';
import '../styles/Hero.css';
import background from '../assets/img/board-investigation2.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img  className="hero-img" src={background} alt="imagem de fundo da hero" />
            <p className="hero-description">
                Bem vindo ao <span className="invest">Investigation Cases!</span> O local ideal para testar suas habilidades dedutivas.
            </p>
        </div>
    );
};

export default Hero;