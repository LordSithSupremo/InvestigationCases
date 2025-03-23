import React from "react";
import '../styles/About.css';
import clue from '../assets/img/clue-1.png';
import clue2 from '../assets/img/clue-2.png';

const About = () => {
    return(
        <section className="about">
            <div className="about-img">
                <img src={clue} alt="Pista de identificação da perícia" width={200} height={200}/>
            </div>
            <div className="about-txt">
                <h2>Você é capaz de encontrar o culpado?</h2>
                <p>
                    Este é um projeto de investigação de casos fictícios, onde você e seus amigos devem prestar atenção a cada detalhe e duvidar de cada depoimento. Todos tem algo a esconder, e cabe a vocês descobrirem o que é.
                </p>
                <h2>Como fazer para desvendar nossos casos intrigantes?</h2>
                <p>
                    Em cada caso, haveram uma série de depoimentos e pistas que vocês deverão analisar para descobrir o que realmente aconteceu. Selecionem a opção que vocês acreditarem ser a correta e vejam se o verdadeiro culpado foi encontrado.
                </p>
                <p>
                    Então mãos a obra, clique em um caso e comece a investigar!
                </p>
            </div>
            <div className="about-img2">
                <img src={clue2} alt="Pista de identificação da perícia" width={200} height={200}/>
            </div>
        </section>
    )
};

export default About;
