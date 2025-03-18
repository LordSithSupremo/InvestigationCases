import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CardCases.css';

const CardCases = ({ images, description }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/another-area');
    };

    return (
        <div className="card">
            <div className="card-images">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Case ${index}`} />
                ))}
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <button onClick={handleButtonClick}>Go to Another Area</button>
        </div>
    );
};

export default CardCases;