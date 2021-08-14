const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('./users/users-router.js');
const equipmentRouter = require('./equipment/equipment-router');

const server = express()


server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);
server.use('/api/equipment', equipmentRouter);

server.get('/', (res) => {
    res.json({ api: "up"})
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
    message: err.message,
    stack: err.stack,
    });
});

module.exports = server;
