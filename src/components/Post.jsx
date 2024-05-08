import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';

const Post = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <>
        <Button>Click</Button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item,index)=> {
                        const {id,title} = item
                        return(
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}
export default Post