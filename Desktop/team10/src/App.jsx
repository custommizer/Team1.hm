import Header from './header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './mainpage/Main';
import About from './mainpage/About/About'
import Footer from './footer/Footer'
import './footer/footer.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/about-page">
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
