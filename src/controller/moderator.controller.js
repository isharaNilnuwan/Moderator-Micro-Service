const {getUnModeratedJokes, updateUnModeratedJokes, deleteUnModeratedJokes} = require("../services/submit.service");
const {getAllJokeTypes, addType, createjoke} = require("../services/deliver.service")


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
        res.json(await updateUnModeratedJokes(data));
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

async function rejectJoke(req, res, next) {
    console.log("reject joke", req.params.id)
    try {
        res.json(await deleteUnModeratedJokes(req.params.id));        
    } catch (error) {
        console.error(`Error while getting the lists`);
      next(error);
    }
}

//send the request to deliver jokes and 
async function acceptJoke(req, res, next) {

    const data = req.body;

    try {
        await updateUnModeratedJokes(data)
        await createjoke(data)
        res.json({success : "accepted succesfully"});
    } catch (error) {
        console.error(`Error while getting the lists`);
      next(error);
    }
}


async function addNewType(req, res, next) {

    //save to deliver service
    console.log("add new type modete")
    const data = req.body
    try {
        res.json(await addType(data));
    } catch (error) {
        console.error("Error while getting the lists");
      next(error);
    }
}

async function getJokeTypes(req, res, next) {
    console.log("getnew types controller");
    try {
        res.json(await getAllJokeTypes());
    } catch (error) {
        console.error("Error while getting the lists");
      next(error);
    }
}



module.exports = {getNewJokes, updateJoke, addNewType, acceptJoke, getJokeTypes, rejectJoke}