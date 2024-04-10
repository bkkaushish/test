import { useEffect, useState } from 'react'
import axios from "axios"//we can use also fetch but it is more efficient and give more features
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
 const [Title,setTitle]=useState("")
 const [newJoke,setNewJoke]=useState("")
  

 const handleDelete=(id)=>{
  
    axios.delete(`/api/jokes/${id}`)// we use id in variable because ,we r not giving id direct (through map())
    .catch((e)=>console.log(error))
 }
 const submit=()=>{
  
  axios.post("/api/jokes",{title: Title, joke:newJoke})
  .catch((e)=>console.log(e))
  setNewJoke('')
  setTitle('')
 }
 const handleAdd=()=>{
  axios.post("/api/jokes/addjokes")
  .catch((e)=>console.log(error))
}
 //effected by the url
 useEffect(()=>{
  axios.get("/api/jokes")
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((e)=>console.log(error))
 },[handleDelete,handleAdd])
 
 const share=()=>{//complication :::: on every refresh= button demand 2 clicks to work on!! but only single time ;
  const div=document.getElementById("myDiv") ;
 if (div.style.visibility==='hidden') {
  div.style.visibility= 'visible';
 }else{
  div.style.visibility='hidden';
 }
 }
  return (
    <>
     <h1 >GAURAV SHARMA</h1>
     <p className="p2">jokes:{jokes.length}</p>
     
     {
     jokes.map((joke)=>(
      <div className='div' key={joke.id}>
      <h3>{joke.title}</h3>
      <p className='p3'>{joke.joke}</p>
      <button  className="btn" onClick={()=>handleDelete(joke.id)}>delete ❌</button>
      </div>
      
     ))}
     <button className="btn2" onClick={handleAdd}>add ➕</button>
     <button className="btn2" onClick={share}>share joke😊</button>
     <div
     id='myDiv'
     className='div2'
      >
      <label className='joke'>Title:</label>
      <input type='text'value={Title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <label className='joke'>Joke:</label>
      <input type='text'value={newJoke} 
      onChange={(e)=>setNewJoke(e.target.value)}
      placeholder='please share your funny jokes....!'/>
      <button className="btn2" onClick={submit}>submit</button>
     </div>
    </>
  )
}

export default App
