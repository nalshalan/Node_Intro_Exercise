// Importing a built-in module called http
// In other words, this is a core function of Node
const http = require("http");

// We use that http project to create a server
http.createServer((request, response) => {
    // Request and response are the most important two objects in all of node.  They hold all the relevant info pertaining to server communication

    // This line is sending back a response to whoever visited the server
    response.end("This server is now talking!");
})

// The .listen() tells that server that we just made to start up and continue to listen for incoming requests
.listen(5000, () => {
    console.log("Server is now listening on port 5000");
});