var http = require('http');
var fs = require('fs'); //Needed to require a file system

var server = 
http.createServer(function(request, response){
  
  function readFile(filename){
    fs.readFile(filename, function(err, data) {
      response.write(data);
      response.end();
    })
  } 

  var url = request.url;
  if (url === '/') {
    readFile("index.html");  
  } else if (url === '/page-2') {
    readFile("page-2.html");
  } else if (url === '/page-3') {
    readFile("page-3.html")
  } else if (url === '/page-4') {
    readFile('page-4.html')
  } else if(url === '/page-5'){ 
    readFile('page-5.html')
  } else if(url === '/main.css'){ 
    readFile('main.css')
  } else if(url === '/app.js'){ 
    readFile('js/app.js') 
  } else {
    response.write('Sorry page not found ')
    response.end()
  }

})
server.listen(3000, function(){
  console.log('Gif Server is running on port 3000')
});



















