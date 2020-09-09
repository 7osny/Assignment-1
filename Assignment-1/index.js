const express = require('express');
const logger=require('morgan');
const dishRouter = require('./dishRouter');
const promoRouter = require('./promoRouter');
const leaderRouter = require('./leaderRouter');
     
const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(logger("dev"));
app.use(express.static(__dirname+'/public'));
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

app.listen(port,hostname,()=>{
  console.log("Server running at http://"+hostname+":"+port);
});
//First Assignment