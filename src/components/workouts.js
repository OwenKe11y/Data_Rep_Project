import React from 'react';
import '../App.css';
import { ItemWorkout } from './itemWorkout';

export class Workouts extends React.Component{

    render(){

        return this.props.workouts.map( (workout)=>{
            return <ItemWorkout workout={workout} ReloadData={this.props.ReloadData}></ItemWorkout>
        })
           
    }

    
}