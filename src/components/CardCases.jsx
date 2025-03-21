import React from 'react';
import { Link } from 'react-router-dom';
import { cases } from '../data/cases';
import '../styles/CardCases.css';

const CardCases = () => {
    return (
        <>
            {cases.map((caseItem) => (
                <div key={caseItem.id} className="card">
                    <h2> {caseItem.title} </h2>
                    <div className="card-images">
                        <img src={caseItem.image || '/placeholder.jpg'} alt={caseItem.title || 'Case Image'} />
                    </div>
                        <p>{caseItem.description?.substring(0, 50) || 'Descrição não disponível'}...</p>
                        
                        <Link to={`/cases/${caseItem.id}`}> Ver detalhes </Link>
                </div>
            ))}
        </>
    )
};

export default CardCases;