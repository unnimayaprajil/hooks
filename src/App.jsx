import {useState,createContext} from 'react'
import A from "./components/A"
export const myContext = createContext()
const App =()=>{
 
  const [user,setUser] = useState("Smith")
  return(
  <myContext.Provider value={user}>
    <A/>
  </myContext.Provider>
  
  )
}
export default App
