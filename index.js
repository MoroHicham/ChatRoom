
// To import any lib in nodejs , we use required function 
var express = require('express')
    , cons = require('consolidate')
    , app = express(),
    bodyParser = require('body-parser')

// assign the mustache engine to .html files
app.engine('html', cons.mustache);

// set .html as the default extension 
app.set('view engine', 'html');

app.set('views', __dirname + '/app/components');

app.use(express.static(__dirname + '/app/styless'));

app.use(bodyParser.json())
// Server Creation 

// Each server has an ip adress and a Port Number : in this case we have localhost : 127.0.0.1 with any chosen port
const port = process.env.PORT || 8000;

// Endpoint Creation : URL : https://localhost:8000/index
// HTTP Methods : GET ? POST ? PUT ? DELETE 
// test mustache
app.get('/', function (req, res) {
    var viewdata = { 'test': 'Hey now.' };
    res.render('index', viewdata);
});

// Listener side creation 
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});