import React from 'react';
import { useState, useEffect } from 'react';
import CharCard from '../CharCard';

export default function Type(props) {
    const idDoTipo = props.match.params.id;
    const [type, setType] = useState({});
    const [loading, setLoading] = useState(true);

    const getdata = () => {
        fetch('url' + idDoTipo)
        .then(res => res.json() )
        .then( (result) => {
            setType(result)
            setLoading(false)

        })
    }
    useEffect( ()=> {
        getdata()
    }, []);

    console.log(idDoTipo)
    if(loading){
        return <div><h1>Loading</h1></div>
    }

   /*  return(
        <div className='damage'>
          
            <div className='damage__Pok'>
                <div className='damage__Pok__list'>
                  <h1>Recebe dano dobrado de pokemons do tipo:</h1>
                  {type.damage_relations.double_damage_from.map((item) => (
                    <h2 id="damageButtonI" className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
                  ))} 
                </div>
                <div className='damage__Pok__list__causa'>
                  <h1>Causa dano dobrado em pokemons do tipo:</h1>
                  {type.damage_relations.double_damage_to.map((item) => (
                    <h2 id="damageButtonII" className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
                  ))} 
                </div>
              </div>
              <div className='damage__Pok__list__Card'>
                {type.pokemon.slice(0,200).map((item) => (
                  <Card key={item.pokemon.name} info={item.pokemon}></Card>
                ))}
              </div>
            </div>
    )
*/} 