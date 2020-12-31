import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CardColumns, Card, Button } from 'react-bootstrap';
export class ItemWorkout extends React.Component {

    //delete constructor
    constructor() {
        super();

        this.DeleteWorkout = this.DeleteWorkout.bind(this);
    }

    //delete workout function 
    DeleteWorkout(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.workout._id);

        axios.delete("http://localhost:4000/api/workouts/" + this.props.workout._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }


    render() {

        return (
            <div className="App">
                {/* Bootstrap Card to seperate each workout */}

                <Card className="card" bg="dark" text="light">
                    <Card.Header><h1>{this.props.workout.Name}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title> Number of Sets: {this.props.workout.Sets}</Card.Title>
                        <Card.Text>
                            <p>{this.props.workout.Exercise1}</p>
                            <p>{this.props.workout.Exercise2}</p>
                            <p>{this.props.workout.Exercise3}</p>
                        </Card.Text>
                        {/*Edit Movie Button*/}
                        <Link to={"/editWorkout/" + this.props.workout._id} className="btn btn-primary">Edit</Link>

                        {/*Delete workout Button*/}
                        <Button variant="danger" onClick={this.DeleteWorkout}>Delete</Button>
                    </Card.Body>

                </Card>

            </div>
        );
    }
}