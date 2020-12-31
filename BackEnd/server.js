const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');// import cors
const bodyParser = require("body-parser");//import body-parser
const mongoose = require('mongoose');//import mongoosejs



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//include mongoose.connect
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.bglje.mongodb.net/workouts?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//Define new Schema
const Schema = mongoose.Schema;

var workoutschema = new Schema({
    Name: String,
    Sets: String,
    Exercise1: String,
    Exercise2: String,
    Exercise3: String
});

//Declare workout Schema 
var workoutModel = mongoose.model("workout", workoutschema);

//Want to constantly use cors, code taken from lab sheet
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//workout data linked to api/workouts
app.get('/api/workouts', (req, res) => {
    //Interact with Data base
    workoutModel.find((err, data) => {
        res.json(data);
    })
})

//Search for a workout
app.get('/api/workouts/:id', (req,res)=>{
  workoutModel.findById(req.params.id, (err, data)=>{
    res.json(data)
  })
})

//Update a Movie
app.put('/api/workouts/:id', (req,res)=>{
    console.log("Update workout: " + req.params.id);
    console.log(req.body);

    workoutModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

//Delete a workout 
app.delete('/api/workouts/:id', (req,res)=>{
    //console.log for debugging 
    console.log("Delete workout: " +req.params.id);

    workoutModel.findByIdAndDelete(req.params.id, (err,data)=>{
        //return some data
        res.send(data);
    });
});


//sending workout name, sets and exercise to the console using middle ware
app.post('/api/workouts', (req, res) => {
    console.log('workout recieved');
    console.log(req.body.Name);
    console.log(req.body.Sets);
    console.log(req.body.Exercise1);
    console.log(req.body.Exercise2);
    console.log(req.body.Exercise3);

    workoutModel.create({
        Name: req.body.Name,
        Sets: req.body.Sets,
        Exercise1: req.body.Exercise1,
        Exercise2: req.body.Exercise2,
        Exercise3: req.body.Exercise3

    });

    res.send('Item added');

})



//localhost:4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})