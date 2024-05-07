import { useState } from "react"
import About from "./components/About"
import Home from "./components/Home"
const App = () => {
  const [name,setName] =useState("John")
  const nameChange=()=>{
   setName("smith")
  }
  return (
    <>
      <Home />
      <About name={name} nameChange={nameChange}/>
    </>
  )
}
export default App
