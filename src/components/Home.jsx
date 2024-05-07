import { useEffect, useState } from "react"

const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("johny")
    useEffect(() => {
        console.log('initial call')
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(json => console.log(json))
        return () => {
            console.log("clean up")
        }
    }, [count])

    return (
        <>
            <h2>{count}</h2>
            <h2>{name}</h2>
            <button onClick={() => setName("smith")}>change name</button>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </>
    )
}
export default Home