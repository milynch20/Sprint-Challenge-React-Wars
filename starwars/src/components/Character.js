import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className='character'>
            <div className='characterSpecs'>Name: {props.character.name}</div>
            <div className='characterSpecs'>Gender: {props.character.gender}</div>
            <div className='characterSpecs'>Birth Year: {props.character.birth_year}</div>
            
        </div>
    );
};

export default Character;