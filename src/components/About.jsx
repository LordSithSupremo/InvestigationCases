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
                <h2>Como fazer para desvendar nossos casos intrigantes?</h2>
                <p>
                    Este é um projeto de investigação de casos fictícios, onde você e seus amigos podem se juntarem para desvendarem os mistérios que envolvem cada caso, usando apenas de lógica e um pouco de intuição.
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