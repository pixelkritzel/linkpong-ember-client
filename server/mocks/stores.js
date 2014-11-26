module.exports = function(app) {
  var express = require('express');
  var storesRouter = express.Router();
  storesRouter.get('/', function(req, res) {
    res.send({"stores":[]});
  });
  storesRouter.post('/', function(req, res){
    res.send({"store": [{"id": "2"}]});
  });

  storesRouter.get('/store/2', function(req, res){
    console.log(req);
    res.send({"store": [{"id": "2"}]});
  });

  app.use('/store', storesRouter);
};
