const os = require('os')

module.exports = function (fastify, opts, done) {
    fastify.get('/', async (request, reply) => {
        reply.send({"cputstat": os.loadavg()})
    });
    done()
};
