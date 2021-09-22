import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <h1>React Txt Forum</h1>
      <h4>
        <span className="material-icons">loyalty</span>
      </h4>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
