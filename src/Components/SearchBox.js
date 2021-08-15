import { Link } from 'react-router-dom';
import logo from '../Img/react.gif';


export default function SearchBox(filter) {
    return(
        <div className="app__list__searchbox">
            <div className="app__list__searchbox__container">
                <img className="app__list__searchbox__container__logo" src={logo} alt="Personagem"></img>
                <input
                type="text"
                 placeholder={filter.placeholder}
                onChange={filter.action}
                />

                <button>
                    <Link to="/aboutme">Fron.T-En.Dev</Link>
                </button>
            </div>
        </div>
    )
}