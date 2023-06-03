//filesystem

// const fileSystem = require("fs")

// fileSystem.rmdir("OnePiece",(err)=>{
//     if (err){
//         console.log(err);
//     }
// })
// fileSystem.mkdir("OnePiece",(err)=>{
//     if (err){
//         console.log(err);
//     }
// })

// fileSystem.writeFile("Zoro.txt","I am The Greatest Swordsman!",(err)=>{
//     if (err) throw err
//     console.log("Done")
// })

// fileSystem.unlink("Zoro.txt",(err)=>{
//     if (err){
//         console.log(err);
//     }
// })

//-----------------------------------------------------

//operating system

// const OS = require("os")
// console.log(OS.platform()); 
// console.log(OS.arch());

//-----------------------------------------------------

//HTTP

// const http = require("http")

// http.createServer((request,response)=>{
//     console.log(request.headers)
//     response.end("Hello Zoro!")
// }).listen(3000)

// http.createServer((request,response)=>{
//     if (request.url === "/"){   //root route = '/'
//         response.end("Hello Luffy")
//     }
//     else{
//         response.end("Hello all, this ain't the root route!");
//     }
// }).listen(3000)

// =============================================================

//REST API = representing data by sharing after processing

// RE => REpresentational
// S => State
// T => Transfer

//---------------------------------------------------------------

//EXPRESS JS

const express = require("express")

//INITIALISE

const zoro = express()
zoro.use(express.json())

//HTTPS methods -> GET POST PUT DELETE

//GET -> to retrieve any data from server
//POST -> to send a data to the server
//PUT  -> to update an existing data 
//DELETE -> to remove existing data from server

zoro.get("/",(request,response)=>{
    return response.json({data:"Hello Luffy!"})
})

zoro.get("/crew/:name",(req,res)=>{
    const crewmate = [
        {name:"Nami"},
        {name:"Robin"},
        {name:"Sanji"},
        {name:"Usopp"},
        {name:"Chopper"},
        {name:"Franky"},
        {name:"Brook"},
        {name:"Jimbie"}
    ]
    const memberName = req.params.name
    const getName = crewmate.filter((member)=>member.name === memberName)
    return res.json({data:getName})
})
//create server
zoro.listen(3000,()=>{
    console.log("Server is up and running successfully!");
})





















