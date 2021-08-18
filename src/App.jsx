import Header from './header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './mainpage/Main';
import About from './About/About';
import Rule from './Rule/Rule';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Route exact path="/">
        <Main/>
      </Route>

      <Switch>
        <Route path="/main">
          <Main/>
        </Route>
        <Route path="/about-page">
          <About />
        </Route>
        <Route path="/rule">
          <Rule />
        </Route>
        
      </Switch>


    </BrowserRouter>
  );
}

export default App;
