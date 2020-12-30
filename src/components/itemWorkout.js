import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; //import bootstrap button
import { Link } from 'react-router-dom';
import axios from 'axios';
export class ItemWorkout extends React.Component {

    //delete constructor
    constructor(){
        super();

        this.DeleteWorkout = this.DeleteWorkout.bind(this);
    }

    //delete workout function 
    DeleteWorkout(e){
        e.preventDefault();
        console.log("Delete: "+this.props.workout._id);

        axios.delete("http://localhost:4000/api/workouts/"+this.props.workout._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }


    render() {

        return (
            <div className="App">
                {/* Bootstrap Card to seperate each workout */}
                <Card>
                    <Card.Header>
                        {/* workout Name */}
                        <h4>{this.props.workout.Name}</h4>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">

                            {/* workout Poster */}
                            {this.props.workout.Sets}

                          
                            {/* workout Release Year */}
                            {this.props.workout.Exercise}
                         
                        </blockquote>
                    </Card.Body>

                    {/*Edit workout Button*/}
                    <Link to={"/editWorkout/" + this.props.workout._id} className="btn btn-primary">Edit</Link>

                    {/*Delete workout Button*/}
                    <Button variant="danger" onClick={this.DeleteWorkout}>Delete</Button>
                </Card>

            </div>
        );
    }
}