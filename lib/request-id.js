'use strict';

/** @type {import('@hapi/hapi').Plugin<{}>} */
const plugin = {
    name: 'requestid',
    version: '1.0.0',
    async register(server) {
        server.ext({
            type: "onRequest",
            method: (request, h) => {
                request.plugins['requestid'] = request.info.id;
            }
        });
    }
};

module.exports = plugin;