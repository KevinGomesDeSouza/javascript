const http = require("http");
http.createServer((request,response)=>{
    response.writeHead(200,{
        "content_type":"text/plain"
    });
    response.write("CFB Cursos\n")
    response.end();
}).listen(1337)