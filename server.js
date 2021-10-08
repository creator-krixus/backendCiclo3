const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors')

const routes = require('./routes')

app.set('port', process.env.PORT || 3000);

const dbOptions = {
    host: 'db4free.net',
    port: 3306,
    user: 'pruebasenmicrud',
    password: 'Pruebasconjava',
    database: 'dbpersonas9876'
}

//Middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors())

//Routes ----------------------------------------------
app.use('/usuarios', routes);

//server running ---------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server started on port`,app.get('port'));
});