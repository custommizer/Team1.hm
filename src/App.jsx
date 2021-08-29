import Header from "./header/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./mainpage/Main";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Client from "./client/Client";
import Store from "./store/Store";
import Contacts from "./contact/Contacts";
import SignUp from './sign-up/SignUp';
import Footer from "./Footer/Footer";
import Cart from "./cart/Cart"

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
          <Footer />
        </Route>
        <Route path="/rule">
          <Faq />
          <Footer />
        </Route>
        <Route path="/client">
          <Client />
          <Footer />
        </Route>
        <Route path="/store">
          <Store />
          <Footer />
        </Route>
        <Route path="/call">
          <Contacts />
        </Route>
        <Route path="/sign-up">
          <SignUp />
          <Footer />
        </Route>
        <Route path="/cart">
          <Cart />
          <Footer />
        </Route>
      </Switch>
        
    </BrowserRouter>
  );
}

export default App;
