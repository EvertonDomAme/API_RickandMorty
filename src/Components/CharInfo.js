import { useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utilities';

export default function CharInfo(props) {
    const character = props.location.state;
    let id = (' ' + character.id).slice(-3); 
    return (
        <div className="container">
            <div className="charinfo">
                <div className="charinfo__image">
                <img src={character.image} alt={character.name} />
                  
                </div>
                <div className="charinfo__body">
                    
                    <div className="charinfo__body__characteristics">
                        <p> # {character.id }</p>
                        <h2> {primeiraLetra(character.name)}</h2>
                        <p><strong>Status : </strong> { character.status } </p>
                        <p><strong>Species : </strong> { character.species } </p>
                        <p><strong>Type: </strong> { character.type }</p>
                        <p><strong>Gender : </strong> { character.gender } </p>
                    </div>
                </div>
                <div className="charinfo__footer">
                    <Link className="charinfo__footer__link" to="/">Back</Link>
                </div>
            </div>
        </div>
    );
}