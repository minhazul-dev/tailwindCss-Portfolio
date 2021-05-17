import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import AllBlogs from './components/AllBlogs/AllBlogs';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';


function App() {
 
  return (
   
    <Router>
    <div>
    <MessengerCustomerChat
    pageId="102340855359939"
    appId="119270633519552"
    // htmlRef="https://personal-portfolio-208c4.web.app/"
  />
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/about">
         <AboutMe/>
        </Route>
        <Route path="/skills">
         <Skills></Skills>
        </Route>
        <Route path="/contact">
         <Contact/>
        </Route>
        <Route path="/blogs">
         <AllBlogs/>
        </Route>
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
