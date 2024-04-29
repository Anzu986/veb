const gamesRouter = require ('express').Router();
const { sendAllGames, sendUpdatedGame } = require('../controllers/games');
const {getAllGames, checkIsTitleInArrey, updateGamesArrey, updateGamesFile, findGameById, deleteGame} = require('../middlewares/games');


gamesRouter.get ('/games',  getAllGames, sendAllGames);
gamesRouter.delete('/games/:id',getAllGames,  findGameById, deleteGame,  updateGamesFile,sendUpdatedGame);
gamesRouter.post('/games',getAllGames, getAllGames, checkIsTitleInArrey, updateGamesArrey, updateGamesFile, sendUpdatedGame);



module.exports = gamesRouter;