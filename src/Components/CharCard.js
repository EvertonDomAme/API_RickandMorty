import { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utilities';

export default function CharCard(info) {
    const [character, setCharacter] = useState(info.info);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(() => {
        fetch(info.info.url)
        .then(res => res.json())
        .then((result) => {
            setCharacter(result)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(true)
        })
    }, [info.info.url]);

    useEffect(() => {
        getData();
    },[getData])

    let id = ('' + character.id).slice(-3);

    return(
        <div className="app__list__card">
            <Link className="app__list__card__link" to={{ pathname: "/charinfo/:id" + character.id, state: character }}>
                <img className="app__list__card__img" src={character.image} alt={character.name} />
                <div className="app__list__card__info">
                    {<p className="app__list__card__id">{'#' + id}</p>}
                    <h2 className="app__list__card__name">{primeiraLetra(character.name)}</h2>
                </div>
            </Link>
        </div>
    )
}