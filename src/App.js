import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharInfo from './Components/CharInfo';
import CharList from './Components/CharList';
import AboutMe from './Components/AboutMe';
import CharTypes from './Components/Types/CharTypes';
import './Styles/main.scss';
//***###$$$###***importar estilo de styled_components***###$$$###***

export default function App() {

    return(
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={CharList} />
                    <Route path="/charinfo/:id" component={CharInfo} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/chartypes/:id" component={CharTypes}/>
                    {/*<Route path="/something/curiousthing" component={Something} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}