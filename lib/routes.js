'use strict';

// @ts-check

/** @type {import('@hapi/hapi').Plugin<{}>} */
const plugin = {
    name: 'routes',
    version: '1.0.0',
    async register(server) {
        server.route({
            method: 'GET',
            path: '/',
            handler(request, h) {
                return { status: 'ok' };
            }
        })
    }
}

module.exports = plugin;