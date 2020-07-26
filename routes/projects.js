var data = require('../data-store');
const e = require('express');
var projects = data.getProjects();
var router = require('express').Router();
router.get('/',function (req, res, next) {
    res.status(200).json(projects); 
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
                return res.status(200).json(v);
            }
        });
    }    
   return res.status(404).json([]); 
});

module.exports = router;
