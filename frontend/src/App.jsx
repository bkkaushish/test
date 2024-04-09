import { useEffect, useState } from 'react'
import axios from "axios"//we can use also fetch but it is more efficient and give more features
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  //effected by the url
  useEffect(()=>{
  axios.get("/api/jokes")
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((e)=>console.log(error))
 })


  return (
    <>
     <h1>GAURAV SHARMA</h1>
     <p>jokes:{jokes.length}</p>
     
     {
     jokes.map((joke)=>(
      <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.joke}</p>
      </div>
     ))}
     

    </>
  )
}

export default App
