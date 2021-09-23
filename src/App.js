import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import AppContainer from './hoc/AppContainer'

import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Timeline from './Timiline/Timeline'


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <AppContainer>
        <h1>React Txt Forum</h1>
        <h4>
          <span className="material-icons">loyalty</span>
        </h4>
      </AppContainer>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route path="/timeline" component={Timeline} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
