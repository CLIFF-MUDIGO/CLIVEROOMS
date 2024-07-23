const mongoose = require('mongoose');

var mongoURL = `mongodb+srv://mudigo:mudigo2002@cluster0.fmhwhjq.mongodb.net/mern-rooms`

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var connection = mongoose.connection;

connection.on('error', () => {
    console.log("Mongo DB connection failed");
});
connection.on('connected', () => {
    console.log("Mongo DB connection successful");
})

module.exports = mongoose