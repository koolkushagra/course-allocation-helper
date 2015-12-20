var express = require('express');
var router = express.Router();

var myCollection = require('../schema/course.js');

/* GET home page. */
router.get('/school/:school', function(req, res, next) {
    var sch = req.params.school;
    if(sch == ""){
        sch = "SCSE";
    }
    myCollection.find({school : sch},'school L T P J C code title type program', function(err, users){
      if(err){
        res.send(err);
      }
     // console.log(users);
      res.render('index.ejs',{data: users, type : sch});
  });
});

router.get('/', function(req, res, next){
    res.redirect('/school/SCSE');
});

router.get('/faculty', function(req, res, next){
   myCollection.distinct('fac_name' , function(err, users){
       if(err){
            res.send(err);
        }
        res.render('teachers.ejs',{data: users});
   }); 
});

router.get('/faculty/:name', function(req, res, next){
    
    console.log(req.params.name);
    
   myCollection.find({fac_name : req.params.name} ,'school L T P J C slot code title type program',function(err, users){
       if(err){
            res.send(err);
        }
        res.render('index.ejs',{data: users, type : "FAV"});
   }); 
});


router.get('/course/:code', function(req, res, next) {
    var ccode = req.params.code;
    
    myCollection.find({code : ccode},'fac_name slot nbr seats venue', function(err, users){
        if(err){
            res.send(err);
        }
        
         res.render('course.ejs',{data: users});
    });
})

module.exports = router;
