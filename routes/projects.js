var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();
router.get('/',function (req, res, next) {
    res.send(projects); 
});
router.get('/:id',function (req, res, next) {
    projects.forEach(function(v){
        if(v.id==req.params.id){
            return res.send(v);
        }
    });
   return res.send([]); 
});
router.get('/active',function (req, res, next) {
    var activeResult = [];
    projects.forEach(function(v){
        if(v.isActive){
            activeResult.push(v);
        }
    });
   return res.send(activeResult); 
});

module.exports = router;
