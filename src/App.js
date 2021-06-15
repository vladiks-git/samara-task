import './App.css';
import Home from "./components/home/home";
import {Redirect, Route, Switch} from "react-router-dom";
import Time from "./components/time/time";
import Weather from "./components/weather/weather";

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/time'} component={Time}/>
      <Route exact path={'/weather'} component={Weather}/>
      <Redirect to={'/'}/>
    </Switch>
  );
}

export default App;
