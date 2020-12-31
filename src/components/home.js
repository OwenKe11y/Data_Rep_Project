//Imports
import React from 'react';
import '../App.css';

export class Home extends React.Component {
  render() {
    return (


      <div className="home">
        {/* Sections and content for parallax scrolling (reference in App.css) */}
        <main className="main">
          <section className="section parallax parallax-one">
            <div className="mainText">A place to store all your Workouts
                    </div>
          </section>
          <section className="section static static-one">
            <div className="getStarted">
              <p style={{ fontSize: "60px" }}>Get Started</p>
              <p><a style={{ fontSize: "30px" }} href="/newWorkout">Create new Plan</a></p>
            </div>
          </section>
          <section className="section parallax parallax-two">
            <div className="mainText">Need some good Workouts?
            </div>
          </section>
          <section className="section static static-two">
            <div className="moreWorkouts">
              <p style={{ fontSize: "60px" }}>Check some out here</p>
              <p><a style={{ fontSize: "30px" }} href="https://athleanx.com/the-training/best-sellers">Athlene X</a></p>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

