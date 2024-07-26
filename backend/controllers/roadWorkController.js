"use strict";
let Models = require("../models"); // matches index.js

const getRoadWorks = (res) => {
  // finds all roadworks
  Models.RoadWork.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createRoadWork = (data, res) => {
  // creates a new roadwork using JSON data POSTed in request body
  console.log(data);
  new Models.RoadWork(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateRoadWork = (req, res) => {
  // updates the roadwork matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.RoadWork.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteRoadWork = (req, res) => {
  // deletes the roadwork matching the ID from the param
  Models.RoadWork.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserRoadWorks = (req, res) => {
    // finds all raodworks for a given user and populates with user details
    Models.RoadWork.find({userId: req.params.uid})
      .populate({path: 'userId'}) // this 'populate' function uses the foreign key reference in the model to get all user data and include in the list of posts
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };

module.exports = {
  getRoadWorks,
  createRoadWork,
  updateRoadWork,
  deleteRoadWork,
  getUserRoadWorks
};
