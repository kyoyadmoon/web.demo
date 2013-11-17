
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.demo = function(req, res){
  res.render('demo', {
    title: 'this is demo page',
    header: 'demo demo demo ...'
  });
};

exports.app = function(req, res){
  res.render('bootstrap', {
    title: 'this is Bootstrap',
    content: 'many many many content ...'
  });
};