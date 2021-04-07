import React from 'react';
import ResultCard from './../ResultCard/ResultCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <ResultCard key={suggestedName} suggestedName={suggestedName} />;
    });
    return <div className="result-container">{suggestedNamesJsx}</div>;
};

export default ResultContainer;
