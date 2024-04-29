const gameRouter = require ('express').Router();
const { getAllGames, deleteGame, addGame } = require('../controllers/games');






gameRouter.get ('/games', getAllGames);
gameRouter.delete('/games/:id', deleteGame);
gameRouter.post('/games', addGame);



module.exports = gameRouter;