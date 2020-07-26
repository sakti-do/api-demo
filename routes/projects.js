var data = require('../data-store');
const e = require('express');
var projects = data.getProjects();
var router = require('express').Router();
router.get('/',function (req, res, next) {
    return res.status(200).json(projects); 
});
router.get('/:id',function (req, res, next) {
    var activeResult = [];
    if(req.params.id==='active'){
        
        projects.forEach(function(v){
            if(v.isActive){
                activeResult.push(v);
            }
        });
        return res.status(200).send(activeResult); 
    } else {
        activeResult = projects.filter(function(v){
            return v.id==req.params.id;
        });
        
        let status = activeResult.length ? 200 :404;
        activeResult = activeResult.length?activeResult[0]:{message : 'No Project Found'};
        return res.status(status).json(activeResult);
    }
});

module.exports = router;
