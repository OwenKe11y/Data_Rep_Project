//Imports
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixed="top" className="nav-main" variant="dark">
          <Navbar.Brand href="#home">HomeFit</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

        </Navbar>
        <main className="main">
          
          <section className="section parallax parallax-one"></section>
          <section className="section static static-one">Static</section>
          <section className="section parallax parallax-two"></section>
          <section className="section static static-two">Static</section>
          
        </main>
        
      </div>
    );
  }
}
export default App;
