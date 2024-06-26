const express = require ('express')
const bodyParser = require('body-parser')
const app = express();

const path = require ('path');
const mainRouter = require('./routes/main');
const gameRouter = require('./routes/games');
const { cors } = require('./middlewares/cors');


const PORT = 3000;



app.use (
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
mainRouter,
gameRouter
);



app.listen(PORT, () =>{
    console.log(`приложение запущено тут : http://localhost:${PORT}`);
})

