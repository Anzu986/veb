const mainRouter = require ('express').Router();

mainRouter.get('/', (req, res) =>{
    fs.readFile('./public/index.html', 'utf-8').then((data) =>{
        res.header('Content-type' , 'text/html');
        res.send(data);
    })
    });

    module.exports = mainRouter;
    