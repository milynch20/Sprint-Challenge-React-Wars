import React from 'react';

const Character = (props) => {
    return (
        <div className='character'>
            <div className='characterSpecs'>Name: {this.state.character.name}</div>
            <div className='characterSpecs'>Hair Color: {this.state.character.hair_color}</div>
            <div className='characterSpecs'>Gender: {this.state.character.gender}</div>
            <div className='characterSpecs'>Birth Year: {this.state.character.birth_year}</div>
        </div>
    );
};

export default Character;