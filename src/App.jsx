import Header from './header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './mainpage/Main';
import About from './About/About';
import Faq from './Faq/Faq';
import Client from './client/Client';
import Store from './store/Store'
import Contacts from './contact/Contacts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/about-page">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/client">
            <Client />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
