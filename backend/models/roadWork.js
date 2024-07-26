const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadWorkSchema = new Schema({
    roadName: { type: String, trim: true, required: true },
    suburb: { type: String, trim: true, required: true },
    city: { type: String, trim: true, required: true },
    country: { type: String },
    startLocation: {type: String, required:true},
    endLoacation: {type: String, required:true},
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    description: {type: String, required: true}
});

module.exports = mongoose.model("roadWork", roadWorkSchema);