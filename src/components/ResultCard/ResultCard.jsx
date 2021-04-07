import React from 'react';
import './ResultCard.css';

const cheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const ResultCard = ({ suggestedName }) => {
    return (
        <a
            className="result-card-link"
            href={`${cheapUrl}${suggestedName}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="result-card">
                <p className="result-card-text">{suggestedName}</p>
            </div>
        </a>
    );
};

export default ResultCard;
