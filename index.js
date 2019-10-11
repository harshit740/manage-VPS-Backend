// Require the framework and instantiate it
const fastify = require('fastify')({logger: false});

//plugins
const options = {
    addToBody: true,
 //   sharedSchemaId: 'MultipartFileType', // Optional shared schema id
    onFile: (fieldName, stream, filename, encoding, mimetype, body) => {
        // Manage the file stream like you need
        // By default the data will be added in a Buffer
        // Be careful to accumulate the file in memory!
        // It is MANDATORY consume the stream, otherwise the response will not be processed!
        // The body parameter is the object that will be added to the request
        stream.resume()
    },
    limit: { /*...*/} // You can the limit options in any case
};
fastify.register(require('fastify-multipart'), options);
fastify.register(require('fastify-cors'),false);

//routs
fastify.register(require('./Routes/dashboard/dashbard'), {prefix: '/dashboard'});
fastify.register(require('./Routes/FileManager/filemanager'), {prefix: '/filemanager'});


// route entry point
fastify.get('/', async (request, reply) => {
    return {hello: 'world'}
});


// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000,'0.0.0.0');
        // fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
};
start();
