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
        this.onChangeExercise = this.onChangeExercise.bind(this);


        this.state = {
            Name: '',
            Sets: '',
            Exercise: ''
        }

    }

     //log unique id and update the document
     componentDidMount(){
        console.log("WAAAAAAAAAAAAAAAAAAAAANK"+this.props.match.params._id);

        axios.get('http://localhost:4000/api/workouts/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Name:response.data.Name,
                Sets:response.data.Sets,
                Exercise:response.data.Exercise
            })
        })
        .catch((error)=>{
            console.log(error)
        })
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
    onChangeExercise(e) {
        this.setState({
            Exercise: e.target.value
        });
    }

    //Method for when the Workout is submitted
    onSubmit(e) {
        e.preventDefault();
        alert("Workout: " + this.state.Name + " " + "Sets: " + this.state.Sets + " " + "Exercise: " + this.state.Exercise);

        const newWorkout = {
            Name: this.state.Name,
            Sets: this.state.Sets,
            Exercise: this.state.Exercise, 
            _id: this.state._id
        }
        console.log("Yeets" + this.state._id)
        axios.put('http://localhost:4000/api/workouts/'+this.state._id, newWorkout)
        .then((res)=>{console.log("Yeets" + res.data);
        })
        .catch((err)=>{console.log(err);
        });

    }
    render() {

        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    {/* Workout Name input Control */}
                    <div className="form-group">
                        <label>Edit Workout Name</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>

                    {/* Workout Sets input Control */}
                    <div className="form-group">
                        <label>Add Workout Sets</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Sets}
                            onChange={this.onChangeSets}></input>
                    </div>

                    {/* Workout Exercise Control */}
                    <div className="form-group">
                        <label>Workout Exercise</label>
                        <textarea type='text'
                            className="form-control"
                            value={this.state.Exercise}
                            onChange={this.onChangeExercise}></textarea>
                    </div>

                    {/* Add Workout button */}
                    <div className="form-group">
                        <input type='submit'
                            value='Add Workout'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}