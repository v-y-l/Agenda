let firebase = require("firebase");
const { apiKey } = require("./secure");

let config = {
	apiKey: apiKey,
	authDomain: "ww-wn-nxj.firebaseapp.com",
	databaseURL: "https://ww-wn-nxj.firebaseio.com",
	projectId: "ww-wn-nxj",
	storageBucket: "ww-wn-nxj.appspot.com",
	messagingSenderId: "480120212392"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
let myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
// let recommendations = myFirebase.child("recommendations");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.

let sessions = myFirebase.child("sessions");

let newWwWn = sessions.push({
    "title": "Fidelity Academy - Boston",
    "date":"05/01/2018",
});

const wwComments = [{"comment":"ww1"}, {"comment":"ww2"}, {"comment":"ww3"}];
const wnComments = [{"comment":"wn1"}, {"comment":"wn2"}, {"comment":"wn3"}];

wwComments.forEach(function(comment){
	newWwWn.child("ww").push(comment);
});

wnComments.forEach(function(comment){
	newWwWn.child("wn").push(comment);
});
