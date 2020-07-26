var data = require('../data-store');
const e = require('express');
var projects = data.getProjects();
var router = require('express').Router();
router.get('/',function (req, res, next) {
    res.status(200).send(projects); 
});
router.get('/:id',function (req, res, next) {
    if(req.params.id==='active'){
        var activeResult = [];
        projects.forEach(function(v){
            if(v.isActive){
                activeResult.push(v);
            }
        });
        return res.status(200).send(activeResult); 
    } else {
        projects.forEach(function(v){
            if(v.id==req.params.id){
                return res.status(200).send(v);
            }
        });
    }    
   return res.status(404).send([]); 
});

module.exports = router;
