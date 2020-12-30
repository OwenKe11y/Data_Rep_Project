//Imports
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/home';
import { NewWorkout } from './components/newWorkout';
import { MyWorkouts } from './components/myWorkouts';
import { EditWorkout } from './components/editWorkout';

class App extends Component {
  render() {
    return (
      <Router>
        {/* Navbar with custom styling  */}
        <div className="App">
          <section>
          <Navbar sticky='top' className="nav-main" variant="dark" expand="lg">
            <Navbar.Brand href="/">HomeFit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/myWorkouts">My Workouts</Nav.Link>
                <Nav.Link href="/newWorkout">New Workout</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#pricing" >About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </section>
          <Switch>
            <Route path= '/' component={Home} exact></Route>
            <Route path= '/newWorkout' component={NewWorkout} exact></Route>
            <Route path= '/myWorkouts' component={MyWorkouts} exact></Route>
            <Route path= '/editWorkout' component={EditWorkout} ></Route>
          </Switch>

        </div>

        
      </Router>
    );
  }
}
export default App;
