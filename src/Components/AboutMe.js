import { Link } from 'react-router-dom'
import programar from '../Img/programming.gif';
import everton from '../Img/evertonom.jpg';
import react from '../Img/react.gif';
import github from '../Img/github.png';
import linkedin from '../Img/linkedin.png';

export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h2>Aprendendo a codar em React!</h2>
        <img className="app__about__gif" src={programar} alt="proud" />
        <p className="app__about__header"> Meu nome é Éverton de Oliveira, sou aluno na Blue Edtech! </p>
        <img className="app__about__me" src={everton} alt="the author" />

        <p className="app__about__main">Estou aprendendo a programar em React, JS, HTML, CSS... mais e mais, sempre evoluindo e absorvendo conhecimento, espero poder agregar conhecimento a outros no futuro! Engatinhando para poder correr e atingir meus objetivos, com muito trabalho e esforço!</p>

        <p className="app__about__close">Se gostaram do que viram aqui, não custa nada conferir... rs Sigam-me os bons! </p>

        <div className="app__about__links">
          <a href="https://github.com/EvertonDomAme" target="_blank" rel="noreferrer">
            <i class="im im-github"><img width="60" src={github}/></i>
          </a>
          <a href="https://www.linkedin.com/in/everton-de-oliveira-melo-9a0338a4/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"><img width="80" src={linkedin}/></i>
          </a>
        </div>

        <img className="app__about__react" src={react} alt="Segueeee" />

        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}