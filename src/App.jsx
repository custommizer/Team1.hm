import Header from './header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './mainpage/Main'

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
        
      </Switch>


    </BrowserRouter>
  );
}

export default App;
