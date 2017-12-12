import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Header,
  Main,
  Footer
} from 'Components';

// import Header from '../Header/Header.js';
// import Main from '../Main/Main.js';
// import Footer from '../Footer/Footer.js';
import './App.scss';

import {
  Homepage,
  About,
  Services,
  Sales,
  Online,
  Forum,
  Contacts,
  LoginPage,
  SignupPage,
  Nutrition,
  TrainingPlanSection
} from 'Pages';
// import Homepage from '../../pages/Homepage/Homepage.js';
// import About from '../../pages/About/About.js';
// import Services from '../../pages/Services/Services.js';
// import Sales from '../../pages/Sales/Sales.js';
// import Online from '../../pages/Online/Online.js';
// import Forum from '../../pages/Forum/Forum.js';
// import Contacts from '../../pages/Contacts/Contacts.js';
// import LoginPage from '../../pages/LoginPage/LoginPage.js'
// import SignupPage from '../../pages/SignupPage/SignupPage.js'
// import Nutrition from '../../pages/Nutrition/Nutrition.js'
// import TrainingPlanSection from '../../pages/TrainingPlanSection/TrainingPlanSection.js';


const App = () =>
  <Router>
    <div className='app'>
      <Header />
      <Main>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/services/online-training' component={Online} />
        <Route exact path='/services/training-plan' component={TrainingPlanSection} />
        <Route exact path='/services/nutrition-plan' component={Nutrition} />
        <Route exact path='/sales' component={Sales} />
        <Route exact path='/forum' component={Forum} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
      </Main>
      <Footer />
    </div>
  </Router>


export default App;
