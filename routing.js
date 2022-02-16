// const fs=require('fs');
// // const url=require('url');

// module.exports={
//   renderHTML:function(path,response)
// {

//     fs.readFile(path,null,(error,data)=>{
// if(error){
//     response.writeHead(404);
//     response.write("File not found");

// }
// else {

//     response.write(data);
// }
// response.end();

// }
// );

// }
// }

// module.exports={
//     handleRequest:function(request,response){
      
    
     
// var path=url.parse(request.url).pathname;
    
// switch(path){
//     case '/':
//         renderHTML('./views/home.html',response);
//         break;

//         case '/index':
//             renderHTML('./views/index.html',response);
//             break;
    
//     case '/login':
//         renderHTML('../login.html',response);
//         break;    
        
//     case '/about':
//         renderHTML('./views/about.html',response);
//         break;    

//         case '/recent':
//             renderHTML('./views/recent.html',response);
//             break;    

//             default:
//                 response.writeHead(404);
//                 response.write("Route not defined");
//                 response.end();
// }
// }

// }
