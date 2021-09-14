const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const pizza = require('./pizzaFactory');
const routes = require('./routes/pizzaRoutes');
const pg = require("pg");
const Pool = pg.Pool;
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// enable the static folder...
app.use(express.static('public'));


// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add more middleware to allow for templating support
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// database connection
const connectionString = process.env.DATABASE_URL || 'postgresql://nonzwakazi:Bokang2851!@localhost:5432/pizza_database';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
    }
});

//instantiated factory function
const pizzA = pizza();
const pizzaRoutes = routes(pizzA)

app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// let counter = 0;

app.get('/', pizzaRoutes.home)

app.post('/add', pizzaRoutes.addPizzas)

app.get('/order', pizzaRoutes.orders)

// app.post('/count', function(req, res) {
// 	counter++;
// 	// res.redirect('/')
// });

const PORT =  process.env.PORT || 3030;

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});