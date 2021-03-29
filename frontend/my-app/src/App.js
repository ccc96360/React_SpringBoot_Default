import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent';
import {Route, Switch} from 'react-router-dom'
import DefaultPage from './Component/DefaultPage';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path = "/" component = {DefaultPage} />
          <Route exact path = "/test" component = {MainComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
