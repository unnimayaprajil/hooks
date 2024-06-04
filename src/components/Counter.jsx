import { useMemo, useState } from "react"

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 2)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 300000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <div>
                <button onClick={incrementOne}>Counter1</button>
                <span>{counterOne}</span>
                <h2>{isEven ? "Even" : "Odd"}</h2>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter2</button>
                <span>{counterTwo}</span>
            </div>
        </>
    )
}
export default Counter