import bodyParser from "body-parser";
import express from "express"//module js, const is common js, to change from common to module just go to package.json and enter type:"module"
const PORT=9000;
const app= express();




app.get("/",(req,res)=>{
    res.send("server is ready!!!");
});


//let send some json for frontend
//let is used because we change jokes by deleting it
let jokes=[
    {
        id:1,
        title: "joke 1",
        joke: "this is joke 1"
},
{
    id:2,
    title: "joke 2",
    joke: "this is joke 2"
},
{
id:3,
title: "joke 3",
joke: "this is joke 3"
},
{
id:4,
title: "joke 4",
joke: "this is joke 4"
},
{
id:5,
title: "joke 5",
joke: "this is joke 5"
},
];

app.get("/api/jokes",(req,res)=>{
res.send(jokes);
});

app.delete("/api/jokes/:id",(req,res)=>{
  const id= parseInt(req.params.id);
  jokes=jokes.filter(joke=>joke.id!==id);

  res.json({ success: true});
} );

app.post("/api/jokes/addjokes",(req,res)=>{
  let nextId= jokes.length + 1;
    jokes.push({id:nextId,
    title: `joke ${nextId}`,
    joke:`this is joke ${nextId}`
    });
    res.json({success: true});
});
app.use(bodyParser.json())
app.post("/api/jokes",(req,res)=>{
const newJokes={id:jokes.length + 1,
    title: req.body.title,
    joke: req.body.joke};
    jokes.push(newJokes);
    res.json({success: true});
});
app.listen(PORT,()=>console.log("server started at port"+PORT));

