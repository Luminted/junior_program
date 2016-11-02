'use strict';

module.exports = {
    dbFileName: 'db.json',
    routes: {
        bestPlayer: '/player/best',
        lastPlayer: '/player/last',
        play: '/play/:player/:number',
        front: '/',
        admin: '/admin',
    }
}