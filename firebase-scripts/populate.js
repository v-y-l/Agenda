// Script initializes the firebase database with dummy data for the app has a useful initial state

let firebase = require("firebase");
const { config } = require("./secure");

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
let myFirebase = firebase.database().ref();

// Plans have their own name, event options, and a schedule of the selected events
let plans = myFirebase.child("plan");
let promises = [];

console.log("===========================");
console.log("Creating a plan...");

// Create a plan
let plan = plans.push({
    "title": "Default 10x",
});

// Populate it with event options
console.log("Adding event options...");

function generateOption(title, time) {
	return {
		title,
		time,
	};
};

let eventOptions = plan.child("eventOptions");

const options = [
	generateOption("Judge",2),
	generateOption("Present",5),
	generateOption("Leave Feedback",2),
];

options.forEach(function(opt){
	promises.push(eventOptions.push(opt));
});

// Populate it with a schedule
console.log("Creating a sample schedule...");

let schedule = plan.child("schedule");

let generateEvent = generateOption;

const sampleSchedule = [
	generateEvent("Present",5),
	generateEvent("Judge",2),
	generateEvent("Judge",2),
	generateEvent("Judge",2),
	generateEvent("Leave Feedback",2),
];

sampleSchedule.forEach(function(event){
	promises.push(schedule.push(event));
});

Promise.all(promises).then(function(values){
	console.log("Done!");
	console.log("===========================");
	process.exit();
});