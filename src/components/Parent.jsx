import { useCallback, useState } from "react"
import Title from "./Title"
import Button from "./Button"
import Count from "./Count"

const Parent = ()=>{
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(10000)
    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
    
    return(
        <>
        <Title/>
        <Count text="age" count={age}/>
        <Button handleClick={incrementAge}>Increment age</Button>

        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment salary</Button>
        </>
    )
}
export default Parent