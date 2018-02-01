var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/home', function(req, res) {
        res.render('pages/home');
    });
}