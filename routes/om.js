var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/om', function(req, res) {
        var info = [{
            "navn": "Shoon Slips",
            "billedet": "1_klassisk_brun.jpg",
            "information": "Det her Shoon slips her er fantastisk kvalitet"
        },
        {
            "navn": "US Imports",
            "billedet": "2_stribet_stil.jpg",
            "information": "Importet fra USA er dette US Imports et meget lækkert slips og er til dem der gerne vil prøve våget"
        },
        {
            "navn": "Brudegommens favorit",
            "billedet": "3_brudgommens_favorit.jpg",
            "information": "Som navnet udtrykker så er det her slips lige til brudegommen der klar på at tag det næste skridt ud i sit liv"
        },
        {
            "navn": "Sølvpil",
            "billedet": "4_soelvpil.jpg",
            "information": "Sølvpil er rimelig casual wear til mænd der bare gerne vil har noget rimelig simpelt"
        },
        {
            "navn": "Rødstil",
            "billedet": "5_roed_f11.jpg",
            "information": "Dette her slips er meget simpelt rødt, og det fungere til næsten alt"
        },
        {
            "navn": "Blå kant",
            "billedet": "6_blaa_kant.jpg",
            "information": "Blå kant er endnu simpelt slips med en særlig blå farve der kan være fedt et sort jakkesæt eller mørke blåt"
        }
        ]
        res.render('pages/om', {
           info: info
        }
    );
    });
}
