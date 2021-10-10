const express = require('express');
const routes = express.Router()

//Mostrar todos los usuarios
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

//Insertar nuevos usuarios
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

//Borrar un usuario buscandolo por el id
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query('DELETE FROM usuarios WHERE id = ?', [req.params.id] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Usuario borrado');
                }
            })
        }
    })
})

//Actualizar un usuario buscandolo por el id
routes.post('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            return res.send(err);
        }else{
            conn.query('UPDATE usuarios set ? WHERE id = ?', [req.body, req.params.id] ,(err, rows) => {
                if(err){
                    return res.send(err);
                }else{
                     res.send('Usuario actualizado');
                }
            })
        }
    })
})


module.exports = routes