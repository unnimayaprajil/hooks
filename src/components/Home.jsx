import { useState } from "react"

const Home = () => {
     const [name,setName] =useState("John")
    const changeName = () => {
      setName("Smith")
    }
   
    return (
        <>
            <h2>Hello {name}</h2>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default Home