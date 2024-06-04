import React from "react"
const Count = ({text,count})=>{
    console.log('text',text)
    return(
       <h2>{text} : {count}</h2>
    )
}
export default React.memo(Count)