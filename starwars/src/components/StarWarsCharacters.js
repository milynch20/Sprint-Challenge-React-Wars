import React from 'react';
import Character from './Character';

const StarWarsCharacters = (props)  => {
    return (
        <div className='character-list'>
            {props.characters.map(character => (
                <Character character={character} />
            ))}
        </div>
    )
}

export default StarWarsCharacters;