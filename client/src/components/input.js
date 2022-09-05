import React, { useState } from 'react'
import axios from 'axios'

const myStyle ={
  input:{
    padding:"10px",
    width:"300px"
  },
  button:{
    padding:"10px",
    marginTop:"10px",
    width:"100px"
  }
}

export default function Input() {
  const [userName, createUser] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { text: userName }
    try {
      const res = await axios.post('http://localhost:3001/create', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div >
      <h2>React HTTP Post Request Example</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            style={myStyle.input}
            type="text"
            placeholder="Name"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}
          />
          <br />
        </div>
        <button style={myStyle.button} type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  )
}