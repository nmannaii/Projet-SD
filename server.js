const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routesApi = require('./routesApi').routes;
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use('/api/', routesApi);
app.use(express.static(path.join(__dirname, 'public')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(3000, () => {
    console.log('listening to port 3000 ...');
})