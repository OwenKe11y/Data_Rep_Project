//Imports
import React from 'react';
import '../App.css';

export class Home extends React.Component {
  render() {
    return (
 
        
        <div className="home">
          {/* Sections and content for parallax scrolling (reference in App.css) */}
          <main className="main">
            <section className="section parallax parallax-one">Hewwo</section>
            <section className="section static static-one">Static</section>
            <section className="section parallax parallax-two">Static</section>
            <section className="section static static-two">Static</section>

          </main>
        </div>
    );
  }
}

