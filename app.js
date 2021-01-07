const express = require('express') //express module ko import kiya

const path = require("path") //this is path module to import the direcory

const fs = require("fs") //to import fs 

const app = express(); //initalize kiya app ko express
port = 80; //port 80 per run karana chahata hue app ko 
// bcoz port 80 is easy to load 

//EXPRESS SPECIFIC STUFFS
app.use('/static',express.static('static')) //this single line code is used to static file folder

// app ka data express tak lane ke liye middle ware yah use karate hain 
app.use(express.urlencoded())
//PUG SPECIFICATIONS
//set the templete engine as pug
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'views'));

//ENDPOINTS

app.get('/',(req,res)=>{
    const con = "this is best website ever"
    const params = {'title':'pubg g is game', content:con}

    res.status(200).render(`index.pug`,params);
})

app.post('/',(req,res)=>{
    
    console.log(req.body) //iss se form ka data consol per dikhega
 
    //iss se 
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
  
    let outputToWrite = `the name of the client is ${name}, ${age}  year old, ${gender}, residing at ${address}. More about him/her ${more}`
    fs.writeFileSync('output.txt', outputToWrite)//to create a text file with data in it
   
    const params = {'message': 'your form is submitted'}
    res.status(200).render('index.pug',params);
})

//START SERVER

app.listen(port, ()=>{
    console.log(`this application run on port ${port}`)
}) //this code for app to listen on specific assighn port

