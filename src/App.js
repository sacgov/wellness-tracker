import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import Sleep from './pages/Sleep';
import Main from './components/layout/Main';
import 'antd/dist/antd.min.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import dayjsSetup from './dayjsSetup';

function App() {
    dayjsSetup();

    return (
        <div className="App">
            <Switch>
                <Main>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/billing" component={Billing} />
                    <Route exact path="/sleep" component={Sleep} />
                    <Redirect from="*" to="/dashboard" />
                </Main>
            </Switch>
        </div>
    );
}

export default App;
