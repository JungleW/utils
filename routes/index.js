var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      utils: [
          {"name": "文本暂存工具", "url": "/templet_text"},
          {"name": "文本暂存工具", "url": "/templet_text"},
          {"name": "文本暂存工具", "url": "/templet_text"},
          {"name": "文本暂存工具", "url": "/templet_text"},
          {"name": "文本暂存工具", "url": "/templet_text"},
      ]
  });
});

module.exports = router;
