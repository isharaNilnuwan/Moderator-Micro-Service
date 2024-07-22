const {getUnModeratedJokes, updateUnModeratedJokes} = require("../services/submit.service")

async function getNewJokes(req, res, next) {
    console.log("getNewJokes controller");
    try {
        res.json(await getUnModeratedJokes());
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

//save to submit service
async function updateJoke(req, res, next) {
    const data = req.body
    try {
        res.json(updateUnModeratedJokes(data));
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

async function addNewType(req, res, next) {

    //save to deliver service
    const data = req.body
    try {
        res.json(updateUnModeratedJokes(data));
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

//send the request to deliver jokes and 
async function acceptJoke(req, res, next) {

    //save to deliver service
    const data = req.body
    try {
        res.json(updateUnModeratedJokes(data));
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}



module.exports = {getNewJokes, updateJoke, addNewType, acceptJoke}