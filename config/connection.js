var mongoose = require("mongoose");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

 //Local Database Configuration with Mongoose
 mongoose.Promise = Promise;
 mongoose.connect(MONGODB_URI, function(error)

 	{if(error) throw error;

 	console.log("Database connected");

 });
