const express = require('express')
const connectDB = require('./config/db')
const ip = require('ip');
const ngrok = require('ngrok');
const bodyParser = require('body-parser')


const app = express()
const cors = require('cors');
app.use(cors());

console.log(ip.address())

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors({origin: true, credentials: true}));
// res.header( "Access-Control-Allow-Origin" );
// Define Routes
app.use('/api/auth/', require('./routes/api/auth'));
app.use('/api/users/', require('./routes/api/users'));
app.use('/api/profile/', require('./routes/api/profile'));

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`);
    (async function() {
        const endpointAcccessibleOnTheInternet = await ngrok.connect({ 
            authtoken: "1hh9RuF2HFNECyFIrxEIZRfcjEP_c9N7529jFed269zLSfWN",  
            proto: "http", 
            addr: process.env.PORT,
            region: 'eu',
            subdomain: "http://pickandclean.eu.ngrok.io",
            auth: "lennytandoupro@gmail.com|Lenn@ny1976"
        });
        console.log(`PORT ${PORT} et ${endpointAcccessibleOnTheInternet}`)
    })()
});