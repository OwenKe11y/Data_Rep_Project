import React from 'react';
import '../App.css';
import { Workouts } from './workouts'; // import workouts component 
import axios from 'axios';

export class MyWorkouts extends React.Component {

    constructor(){
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

            <div className="App" style={{backgroundColor:"red"}}>
                <h1>My read in another component</h1>
                {/* importing our movie tag */}
                <Workouts workouts={this.state.workouts} ReloadData={this.ReloadData}></Workouts>
            </div>
        );
    }
}