var express = require('express');
var app = express();

module.exports = function(app) {
    app.get('/about', function(req, res) {
        var ansatte = [{
            "navn": "Anders Hansen",
            "job": "Direktør",
            "billedet": "jan.jpg",
            "Email": "Email: chefen@slipseknuden.eu"
        },
        {
            "navn": "Jan Frandsen",
            "job": "Sælger",
            "billedet": "anders.jpg",
            "Email": "Email: jf@slipseknuden.eu"
        }, 
        {
            "navn": "Annelise Johnson",
            "job": "Sekretær",
            "billedet": "annelise.jpg",
            "Email": "Email: info@slipseknuden.eu" 
        }
        ]
        res.render('pages/about', {
           ansatte: ansatte
        }
    );
    });
}