import { useEffect,useState } from "react";
import CharCard from './CharCard';
import SearchBox from './SearchBox';

export default function CharList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [busca, setBusca] = useState([]);

    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then( res => res.json() )
        .then( (result) => {
            setCharacters(result.results)
            setBusca(result.results)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(true)
        })
    }
    const filterCharacter = (e) => {
        const filtered = busca.filter(item => item.name.includes(e.target.value));
        setCharacters(filtered)
    }
    useEffect( () => {
        getData();
    }, []);

    return(
        <>
            <SearchBox placeholder="Buscar personagem!" action={filterCharacter}></SearchBox>

            <div className="app__list">
                {
                    loading ? (
                        <CharCard></CharCard>
                    ) : (
                        characters.map((item) => (
                            <CharCard key={item.name} info={item}></CharCard>
                        ))
                    )
                }
            </div>
        </>
    )
}