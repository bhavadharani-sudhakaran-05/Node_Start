// *****************************************sending  request*********************************************************

// const http = require ('http');
// function requestListerner(req,res)
// {
// console.log(req);
// }
// const server=http.createServer(requestListerner);
// server.listen(3000);

// normal setup of node server
// or this below "process.exit is for stopping the event loop"

// const http = require ('http');
// const server=http.createServer((req,res)=>
// {
//      console.log(req);
//      process.exit();
// })
// server.listen(3000);

// url-in browser type"localhost:3000/test"
// it shows /test in the terminal so it is used to get info from the browser what we texted

// const http = require ('http');
// const server=http.createServer((req,res)=>
// {
//      console.log(req.url);
//      process.exit();
// })
// server.listen(3000);

// "method" another method
// it shows GET in terminal while give req in browser
// const http = require ('http');
// const server=http.createServer((req,res)=>
// {
//      console.log(req.method);
//      process.exit();
// })
// server.listen(3000);

// use headers --- all data in server side 
// const http = require ('http');
// const server=http.createServer((req,res)=>
// {
//      console.log(req.headers);
//      process.exit();
// })
// server.listen(3000);

// *************************************************************************************************
// sending response
// output will be shown in the chrome browser (developer tools=>network)
// we can able  to  see response in that localhost,headers,...

//    const http = require ('http');
// //  fs - file system core module
//    const fs=require('fs');
//    const server=http.createServer((req,res)=>
//    {
//     const url=req.url;
//     const method=req.method;
//     if(url==='/')
//     {
//     res.setHeader('Content-type','text/html')
//     res.write('<html>')
//     res.write('<head><title>enter form details</title></head>')
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <input type="submit" value="send"></form></body>')
//     res.write('</html>')
//     return res.end();
//     }


//     if(url==='/message'  && method == 'POST' )
//     {
//         fs.writeFileSync('hello.txt','dummy')
//         res.setHeader('Location','/')
//         res.statusCode = 302 ; 
//         return res.end();
//     //302 - it used for redirecting the request
//     // redirect the '/message' to that '/'  
//     }


//     res.setHeader('Content-type','text/html')
//     res.write('<html>')
//     res.write('<head><title>jvl tutorial</title></head>')
//     res.write('<body><h1>Hello from node.js server</h1></body>')
//     res.write('</html>')
//     res.end();

// })
// server.listen(3000);


// ****************************stream and buffer************************************

const http = require ('http');
 const fs=require('fs');
   const server=http.createServer((req,res)=>
   {
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>enter form details</title></head>')
    res.write('<body><form enctype="multipart/form-data" action="/message" method="POST"><input type="text" name="message"> <input type="submit" value="send"></form></body>')
    res.write('</html>')
    return res.end();
    }


    if(url==='/message'  && method == 'POST' )
    {
       const body = [] ;
        req.on('data',(chunk)=>{
                   body.push(chunk);
        }) 
        req.on('end',()=>
        {
            
            
            console.log('End event received');
            const parsedBody = Buffer.concat(body).toString();
             // for adding all buffer we have to concat all the buffer
            const message=parsedBody.split('=');
            fs.writeFileSync('hello.txt', message[1]);

        fs.writeFileSync('hello.txt','dummy')
        console.log('FileWrite completed!');
        res.setHeader('Location','/')
        res.statusCode = 302 ; 
        
        })
        fs.writeFileSync('hello.txt','dummy')
        console.log('FileWrite completed!');
        res.setHeader('Location','/')
        res.statusCode = 302 ; 
        return res.end();
         }


    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>jvl tutorial</title></head>')
    res.write('<body><h1>Hello from node.js server</h1></body>')
    res.write('</html>')
    res.end();

})
server.listen(3000);