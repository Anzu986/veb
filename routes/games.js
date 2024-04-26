const gameRouter = require ('express').Router();

const getAllGames = async (req, res) => {};
const deleteGame = async (req, res) => {};
const addeGame = async (req, res) => {};

gameRouter.get ('/games', getAllGames);
gameRouter.delete('/games/:id', deleteGame);
gameRouter.post('/games/:id', addeGame);



module.exports = gameRouter;