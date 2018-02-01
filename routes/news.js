var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/news', function(req, res) {
        res.render('pages/news');
    });
}