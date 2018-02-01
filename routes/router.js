module.exports = (app) => {
    require('./home')(app);
    require('./about')(app);
    require('./garanti')(app);
    require('./contact')(app);
    require('./news')(app);
    require('./product')(app);
}