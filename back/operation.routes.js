module.exports = (app) => {
    const operations = require('./operation.controller');

    // Create a new operation
    app.post('/operations', operations.create);

    // Retrieve all operations
    app.get('/operations', operations.findAll);

    // Retrieve a single operation with objectId
    app.get('/operations/:operationId', operations.findOne);

    // Update a operation with operationId
    // app.put('/operations/:operationId', operations.update);

    // Delete a operation with operationId
    // app.delete('/operations/:operationId', operations.delete);
}