import React from 'react';
import '../App.css';
import axios from 'axios';

export class NewWorkout extends React.Component {

    //constructor 
    constructor() {
        super();

        //Binding events
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSets = this.onChangeSets.bind(this);
        this.onChangeExercise1 = this.onChangeExercise1.bind(this);
        this.onChangeExercise2 = this.onChangeExercise2.bind(this);
        this.onChangeExercise3 = this.onChangeExercise3.bind(this);


        this.state = {
            Name: '',
            Sets: '',
            Exercise1: '',
            Exercise2: '',
            Exercise3: ''
        }

    }

    //Method for Workout Name input
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    //Method for Workout Sets input
    onChangeSets(e) {
        this.setState({
            Sets: e.target.value
        });
    }

    //Method for Workout Exercise input
    onChangeExercise1(e) {
        this.setState({
            Exercise1: e.target.value
        });
    }
    //Method for Workout Exercise input
    onChangeExercise2(e) {
        this.setState({
            Exercise2: e.target.value
        });
    }
    //Method for Workout Exercise input
    onChangeExercise3(e) {
        this.setState({
            Exercise3: e.target.value
        });
    }

    //Method for when the Workout is submitted
    onSubmit(e) {
        e.preventDefault();
        alert("Workout: " + this.state.Name + " " + "Sets: " + this.state.Sets + " " + "Exercise1: " + this.state.Exercise1 + "Exercise2: " + this.state.Exercise2 + "Exercise3: " + this.state.Exercise3);

        const newWorkout = {
            Name: this.state.Name,
            Sets: this.state.Sets,
            Exercise1: this.state.Exercise1,
            Exercise2: this.state.Exercise2,
            Exercise3: this.state.Exercise3,
        }
        axios.post('http://localhost:4000/api/workouts', newWorkout)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    render() {

        return (
            <div className='App'>
                <main className="main">
                    <section className="section parallax parallax-one-input">
                        <div className="mainText">Add A Workout
                        </div>
                    </section>
                    <section className="section static static-one">
                        <div style={{ display: "inline-block", width: "90%" }}>
                            {/* importing our workout tag */}
                            <form onSubmit={this.onSubmit}>

                                {/* Workout Name input Control */}
                                <div className="form-group">
                                    <label>Add Workout Name</label>
                                    <input type='text'
                                        placeholder='eg. Morning Workout'
                                        className="form-control"
                                        value={this.state.Name}
                                        onChange={this.onChangeName}></input>
                                </div>

                                {/* Workout Sets input Control */}
                                <div className="form-group">
                                    <label>Add Number of Sets</label>
                                    <input type='number'
                                        placeholder='Number of sets'
                                        className="form-control"
                                        value={this.state.Sets}
                                        onChange={this.onChangeSets}></input>
                                </div>

                                {/* Workout Exercise Control */}
                                <div className="form-group">
                                    <label>Workout Exercise #1</label>
                                    <textarea type='text'
                                        placeholder='eg. Sit Ups'
                                        className="form-control"
                                        value={this.state.Exercise1}
                                        onChange={this.onChangeExercise1}></textarea>
                                </div>

                                {/* Workout Exercise Control */}
                                <div className="form-group">
                                    <label>Workout Exercise #2</label>
                                    <textarea type='text'
                                        placeholder='eg. Squats'
                                        className="form-control"
                                        value={this.state.Exercise2}
                                        onChange={this.onChangeExercise2}></textarea>
                                </div>

                                {/* Workout Exercise Control */}
                                <div className="form-group">
                                    <label>Workout Exercise</label>
                                    <textarea type='text'
                                        placeholder='eg. Bicep Curls'
                                        className="form-control"
                                        value={this.state.Exercise3}
                                        onChange={this.onChangeExercise3}></textarea>
                                </div>

                                {/* Add Workout button */}
                                <div className="form-group">
                                    <input type='submit'
                                        value='Add Workout'
                                        className='btn btn-danger'></input>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

            </div>
        );
    }
}