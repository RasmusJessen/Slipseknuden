var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/product', function(req, res) {
        var produkt = [{
            "navn": "Shoon slips",
            "farve": "Klassisk brun",
            "billedet": "1_klassisk_brun.jpg",
            "pris": 450
        },
        {
            "navn": "US Imports",
            "farve": "Stribet",
            "billedet":"2_stribet_stil.jpg",
            "pris": 300
        },
        {
            "navn": "Brudegommens Favorit",
            "farve": "Sølvhvid",
            "billedet": "3_brudgommens_favorit.jpg",
            "pris": 400
        },
        {
            "navn": "Sølvpil",
            "farve": "Hvid",
            "billedet": "4_soelvpil.jpg",
            "pris": 500
        },
        {
            "navn": "Rødstil",
            "farve": "Rødt",
            "billedet": "5_roed_f11.jpg",
            "pris": 350
        },
        {
            "navn": "Blå Kant",
            "farve": "Blåt",
            "billedet": "6_blaa_kant.jpg",
            "pris": 400
        },
        {
            "navn": "Fars favorit",
            "farve": "Beige stribet",
            "billedet": "7_fars_favorit.jpg",
            "pris": 200
        }
        ]
        res.render('pages/product', {
            produkt: produkt    
        });
    });
}