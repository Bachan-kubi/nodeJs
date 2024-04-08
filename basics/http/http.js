const http = require("http");
const port = 5000;

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    const url = req.url;
    console.log(url)
    // if i set plain text in content type it will render all text as plain to ui. amazing
    // res.writeHead(200, {"Content-Type": "text/plain"}); Here we are responding differently to different incoming requests by using the req.url property.
/* In every response, we are doing 3 things:
– Setting the response header using the res.writeHead() method. Here we provide 2 parameters to res.writeHead(): the status code and an object which has the content-type property set to text/html
– Setting the response body using the res.write() method. Note that instead of sending simple messages, we are actually sending some HTML code in this case,
– And closing the response process using the res.end() method.
In case of resources like: /, /about and /contact the status code is set to 200 which means that the request to access a resource was successful. But if the client tries to access some other resource, they simply get back an error message and the status code is set to 404.
Here the 'content-type': 'text/html' is a way of telling the browser how it should interpret and display the response. In this case, we are telling the browser to interpret the response as some HTML code. There are different content-type's for different types of responses:
– To send back JSON data as a response, we need to set the content-type to application/json
– To send back CSS as a response, the content-type should be text/css
– To send back JavaScript code as a response, the content-type should be text/javascript, and so on...
Setting the content type is very important as it determines how the web browser interprets the response. For example: if we just change the content-type from text/html to text/plain, this is how the response will be displayed in the web browser:*/
    res.write(`
        <h1>Server Running</h1>
        <div id="message"></div>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const messageElement = document.getElementById('message');
                messageElement.innerHTML = 'amar server cholse!';
            });
        </script>
    `);
    res.end();
});

server.listen(port, () => {
    console.log(`Server running on ${port}`);
});
