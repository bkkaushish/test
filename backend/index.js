import express from "express"//module js, const is common js, to change from common to module just go to package.json and enter type:"module"
const PORT=9000;
const app= express();


app.get("/",(req,res)=>{
    res.send("server is ready!!!");
});


//let send some json for frontend

app.get("/api/jokes",(req,res)=>{
    const jokes=[
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
    id:1,
    title: "joke 3",
    joke: "this is joke 3"
},
{
    id:1,
    title: "joke 4",
    joke: "this is joke 4"
},
{
    id:1,
    title: "joke 5",
    joke: "this is joke 5"
},
];

res.send(jokes);
});

app.listen(PORT,()=>console.log("server started at port"+PORT));

