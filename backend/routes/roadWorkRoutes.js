let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
    Controllers.roadWorkController.getRoadWorks(res);
});

router.post("/create", (req, res) => {
    Controllers.roadWorkController.createRoadWork(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.roadWorkController.updateRoadWork(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.roadWorkController.deleteRoadWork(req, res);
})

router.get('/user/:uid', (req, res) => { // dynamic param to get posts for user
    Controllers.roadWorkController.getUserRoadsWork(req, res);
})

module.exports = router;