const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true,
	})
);

app.use(express.static("public"));

const url = "mongodb+srv://saleh:saleh1996@cluster0.kpqta.mongodb.net/farm";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const Animal = new mongoose.model('Animal', {
	ID: String,
	mother: String,
	father: String,
	dateOfBirth: String,
	gender: String
})

app.post('/getAllData', (req,res)=>{
	Animal.find({}).then(data => {
		console.log(data)
		res.send(data)
	})
})

app.post('/add', (req, res) => {
	const { Id, Mother, Father, DateOfBirth, Gender } = req.body
	Animal.findOne({ ID: Id }).then(data => {
		if(data != null){
			res.send(false)
		}
		const a = new Animal({
			ID: Id,
			mother: Mother,
			father: Father,
			dateOfBirth: DateOfBirth,
			gender: Gender
		})
		a.save().then(console.log("DONE"))
		res.send(true)
	})
})



app.post('/getItemToEdit', (req, res) => {
	const { Id } = req.body
	Animal.find({ ID: Id }).then(data => {
		console.log(data)
		res.send(data)
	})
})


app.post('/edit', (req, res) => {
	const { Id, Mother, Father, DateOfBirth, Gender } = req.body
	// const a = new Animal({
	// 	ID: Id,
	// 	mother: Mother,
	// 	father: Father,
	// 	dateOfBirth: DateOfBirth,
	// 	gender: Gender
	// })
	// a.save().then(console.log("DONE"))
	Animal.updateOne({ ID: Id }, { $set: { mother: Mother, father: Father, dateOfBirth: DateOfBirth, gender: Gender } }).then(console.log("UPDATED"))
	console.log(req.body)
	res.send(true)
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log("App is Listening to port:", port);
});