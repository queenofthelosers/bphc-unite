const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventName : String,
  eventAddr : String
});

module.exports = Events = mongoose.model("events", eventsSchema);
