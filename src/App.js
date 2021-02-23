import logo from './logo.svg';
import './App.css';
import Tabular from './components/Tabular';
import Chart from './components/Chart';
import ListItem from './components/ListItem';
import Header from './components/Header';
import {Route,Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Tabular}/>
      <Route exact path="/list" component={ListItem}/>
    <Route exact path="/chart" component={Chart}/>
    </Switch>
    </div>
  );
}

export default App;
