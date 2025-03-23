// PÁGINA RESPONSÁVEL POR EXIBIR OS DETALHES DE UM CASO DE INVESTIGAÇÃO

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cases } from "../data/cases";
import "../styles/CasesDetails.css";

const CasesDetails = () => {
    const { id } = useParams();
    const caseItem = cases.find((c) => c.id === parseInt(id));
    const [selectedSuspect, setSelectedSuspect] = useState("");
    const [message, setMessage] = useState("");

    if (!caseItem) {
        return <p>Caso não encontrado.</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSuspect === caseItem.guilty) {
        setMessage(`Parabéns! Você acertou o culpado! Motivo: ${caseItem.motivation}`);
        } else {
        setMessage("Você errou! Tente novamente.");
        }
    };

    return (
        <div className="cases-details">
        <h1>{caseItem.title}</h1>
        <img src={caseItem.image} alt={caseItem.title} />
        <p><strong>Descrição do caso:</strong> {caseItem.description}</p>
        <p><strong>Informações do crime:</strong> {caseItem.info.join(", ")}</p>
        <p><strong>Arma do crime:</strong> {caseItem.weapon}</p>

        <form onSubmit={handleSubmit} className="interaction-form">
            <h2>Quem é o culpado?</h2>
            {caseItem.suspects.map((suspect, index) => (
            <label key={index} style={{ display: "block", margin: "10px 0" }}>
                <input
                type="radio"
                name="suspect"
                value={suspect.split(":")[0]}
                onChange={(e) => setSelectedSuspect(e.target.value)}
                />
                {suspect}
            </label>
            ))}
            <div className="form-buttons">
            <button
                    onClick={() => {
                        window.location.href = `/`; // Redireciona para a pagina inicial
                    }}
                    style={{ marginRight: "10px", padding: "10px 20px" }}
                >
                    Voltar ao início
                </button>
                <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
                Enviar dedução
                </button>
                <button
                    onClick={() => {
                        const nextCaseId = parseInt(id) + 1;
                        window.location.href = `/cases/${nextCaseId}`; // Redireciona para o próximo caso
                    }}
                    style={{ padding: "10px 20px" }}
                >
                    Próximo caso
                </button>
            </div>
        </form>

        {message && (
            <div className="modal">
                <div className="modal-content">
                    <p>{message}</p>
                    <div className="modal-buttons">
                        <button
                            onClick={() => {
                                window.location.href = `/`; // Redirect to home
                            }}
                            style={{ marginRight: "10px", padding: "10px 20px" }}
                        >
                            Voltar ao início
                        </button>
                        <button
                            onClick={() => {
                                setMessage(""); // Close the modal
                            }}
                            style={{ marginRight: "10px", padding: "10px 20px" }}
                        >
                            Fechar Mensagem
                        </button>
                        <button
                            onClick={() => {
                                const nextCaseId = parseInt(id) + 1;
                                window.location.href = `/cases/${nextCaseId}`; // Redirect to next case
                            }}
                            style={{ padding: "10px 20px" }}
                        >
                            Próximo caso
                        </button>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default CasesDetails;