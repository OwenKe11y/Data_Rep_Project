import React from 'react';
import '../App.css';
import axios from 'axios';
export class EditWorkout extends React.Component {

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

    //log unique id and update the document
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/workouts/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.Name,
                    Sets: response.data.Sets,
                    Exercise1: response.data.Exercise1,
                    Exercise2: response.data.Exercise2,
                    Exercise3: response.data.Exercise3
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //Method for Movie Name input
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    //Method for Movie Sets input
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

    //Method for when the workout is submitted
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Name + " " + "Sets: " + this.state.Sets + " " + "Exercise: " + this.state.Exercise);

        const newMovie = {
            Name: this.state.Name,
            Sets: this.state.Sets,
            Exercise1: this.state.Exercise1,
            Exercise2: this.state.Exercise2,
            Exercise3: this.state.Exercise3,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/workouts/' + this.state._id, newMovie)
            .then(res => {

                console.log(res.data)
            })
            .catch();
    }
    render() {

        return (
            // Parallaxing
            <div className='App'>
                <main className="main">
                    <section className="section parallax parallax-one-edit">
                        <div className="mainText">
                            <p>Changing up your Workout?</p>
                            <p><a style={{ fontSize: "30px" }} href="https://athleanx.com/the-training/best-sellers">Try Athlene X</a></p>
                        </div>
                    </section>
                    <section className="section static static-one">
                        <div style={{ display: "inline-block", width: "90%" }}>
                            {/* importing our workout tag */}
                            <form onSubmit={this.onSubmit}>

                                {/* Workout Name input Control */}
                                <div className="form-group">
                                    <label>Edit Workout Name</label>
                                    <input type='text'
                                        placeholder='eg. Morning Workout'
                                        className="form-control"
                                        value={this.state.Name}
                                        onChange={this.onChangeName}></input>
                                </div>

                                {/* Workout Sets input Control */}
                                <div className="form-group">
                                    <label>Edit Number of Sets</label>
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