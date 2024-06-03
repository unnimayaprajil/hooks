import { useContext } from "react"
import { myContext } from "../App"
const D =()=>{
    const consumeContext = useContext(myContext)
    console.log('consumeContext',consumeContext)
    return(
        <>
        <h2>Hello {consumeContext} </h2>
        </>
    )
}
export default D