
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cory for VP Operations and Finance', content: res.locals.content });
};