'use strict';

const test = require('ava').default;

const { createServer } = require('./index');

test('a server is created', async (t) => {
    await t.notThrowsAsync(() => createServer());
});