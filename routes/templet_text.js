var express = require('express');
var router = express.Router();

var text = new Array();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templet_text', { title: 'Express' });
});

/* GET home page. */
router.get('/get', function(req, res, next) {
    var textId = req.query.textId;
    var t = text[textId];
    if( t==undefined || t == '' ){
        res.send({ 
            done : false 
        });
        return;        
    }
    res.send({ 
        done : true, 
        textContent : t 
    });
});

/* GET home page. */
router.post('/post', function(req, res, next) {
    var textId = req.body.textId;
    var textContext = req.body.textContent;
    if(textId=='' || textContext == ''){
        res.send({ 
            done : false 
        });
        return;
    }
    text[textId] = textContext;
    res.send({ 
        done : true 
    });
});

module.exports = router;
