async function getNewJokes(req, res, next) {
    console.log("getNewJokes controller");
    try {
        // res.json(await jokeService.getAll());
        res.json({succss: "authentication sucess for get enw jokes"});
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

module.exports = getNewJokes