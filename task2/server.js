var express = 
    require('express'),
    app = express(),
    bodyParser = require('body-parser');
    port = process.env.PORT || 3000;

app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routesPath = './app/routes/appRoutes'
var routes = require(routesPath);
routes(app);

console.log("Routes set to: " + routesPath);
