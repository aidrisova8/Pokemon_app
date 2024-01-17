const express=require('express');

const app=express();

const pokemon=require("./models/Pokemon")

const PORT=3000;

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.get('/',(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})

app.get('/pokemon',(req,res)=>{
    res.render('Index',{pokemon:pokemon})
})

app.get('/pokemon/:id',(req,res)=>{
    res.render('Show',{pokemon:pokemon[req.params.id]})
    // res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
   
})
