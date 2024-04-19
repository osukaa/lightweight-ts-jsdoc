'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./lib/routes');
const requestId = require('./lib/request-id');

/**
 * @param {import('@hapi/hapi').ServerOptions} options
 * @returns {Promise<import('@hapi/hapi').Server>}
 */
const createServer = async (options) => {
    const server = new Hapi.Server(options);

    await server.register([
        routes,
        requestId
    ]);

    return server;
}

module.exports = {
    createServer,
}