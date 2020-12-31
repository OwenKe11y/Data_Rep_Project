import React from 'react';
import '../App.css';
import { Workouts } from './workouts'; // import workouts component 
import axios from 'axios';

export class MyWorkouts extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);

    }

    //create variable to hold our data
    state = {
        workouts:
            []

    };

    //Function for getting our movie data from our server api and promise
    componentDidMount() {
        axios.get('http://localhost:4000/api/workouts').then
            (
                (response) => {
                    this.setState({ workouts: response.data })
                })
            .catch(
                (error) => { console.log(error) } //incase something goes wrong
            );
    }

    //Reload the data on the page
    ReloadData() {

        axios.get('http://localhost:4000/api/workouts').then
            (
                (response) => {
                    this.setState({ workouts: response.data })
                })
            .catch(
                (error) => { console.log(error) } //incase something goes wrong
            );
    }



    render() {

        return (

            <div className="home">
                {/* Sections and content for parallax scrolling (reference in App.css) */}
                <main className="main">
                    <section className="section parallax parallax-one-add">
                        <div className="mainText">Your Workouts
                    </div>
                    </section>
                    <section className="section static static-one">
                        <div style={{ display: "inline-block", width: "100%" }}>
                            {/* importing our workout tag */}
                            <Workouts workouts={this.state.workouts} ReloadData={this.ReloadData}></Workouts>
                        </div>
                    </section>
                </main>



            </div>
        );
    }
}