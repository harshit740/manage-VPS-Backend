var getList = require('../../handelers/filemanager/managefiles');

const base = '/home/harshit/';
module.exports = function (fastify, opts, done) {
    fastify.post('/', async (request, reply) => {
        var options= request.body
        var list = await getList(options);
        reply.send(list)
    });
    fastify.get('/list', async (request, reply) => {
        var list = await getList(base);
        console.log(list);
        reply.send(list, ishidden = false)
    });

    fastify.post('/new', async (request, reply) => {
        var list = await getList(base);
        console.log(list);
        reply.send(list, ishidden = false)
    });

    fastify.post('/delete', async (request, reply) => {

        var list = await getList('/home/harshit/');
        console.log(list);
        reply.send(list, ishidden = false)
    });
    done();
}
