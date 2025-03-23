import React from "react";
import CardCases from "../components/CardCases";
import "../styles/Cases.css";

const Case = () => {
    return (
        <div className="cases">
            <div className="introduction">
            <h2>Elementar meu caro Whatson</h2>
                <p>
                    Os casos mais empolgantes e intrigantes estão aqui, prontos para serem desvendados por você e seus amigos. Escolham um e se divirtam!
                </p>
            </div>
            <div className="cases-container">
                <CardCases />
            </div>
        </div>
    );
}

export default Case;
