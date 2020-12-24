import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured'; 


//use render={ () => {<About [props />]} if you want to pass props}
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name"
        component={Featured}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound}/>
      </Switch>
    </div>  
  </BrowserRouter>
);

export default App;


/* <BrowserRouter>
  <div className="container">
    <Route exact path="/">'
      <Home />
    </Route>
    <Route path="/about">
      <About/>
    </Route>
  </div>
</BrowserRouter>  */
