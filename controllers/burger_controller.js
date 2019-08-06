var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(
    req.body.burger_name,
   function(result) {
    
   console.log(result);
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update( req.params.id,
  function(result) {
    console.log(result);
    res.json("/");
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router