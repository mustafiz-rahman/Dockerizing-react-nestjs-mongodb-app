import axios from "axios"
import { useEffect, useState } from "react"



export default function Output() {
    const [name, setName] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then((res) => {
                setName(res.data);
                //console.log(res.data)
            })

    }, []);
    

    return (
            <div>
                {name.map((note) => (
                    <ul key={note._id}>
                        <li>
                        {note.text}
                        </li>
                        </ul>
                ))}
            </div>

    )

}