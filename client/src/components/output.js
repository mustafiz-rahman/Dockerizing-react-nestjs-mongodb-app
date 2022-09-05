import axios from "axios"
import { useEffect, useState } from "react"

const myStyle ={
    
    ul:{
      listStyleType: "outside",
      marginTop: "50px",
      padding: "0px",
      background: "#cce5ff",
      color: "darkblue",
      margin: "5px"
    }
  }


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
                    <ul key={note._id} style={myStyle.ul}>
                        <li>
                        {note.text}
                        </li>
                        </ul>
                ))}
            </div>

    )

}