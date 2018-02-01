var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/contact', function(req, res) {
        res.render('pages/contact');
    });
}