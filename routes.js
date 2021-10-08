const express = require('express');
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query('SELECT * FROM usuarios', (err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.json(rows);
                }
            })
        }
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query('INSERT into usuarios set ?', [req.body] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Se registro el usuario');
                }
            })
        }
    })
})


module.exports = routes