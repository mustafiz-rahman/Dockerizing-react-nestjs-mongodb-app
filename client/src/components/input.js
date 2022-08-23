import React, { useState } from 'react'
import axios from 'axios'


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
            type="text"
            placeholder="Name"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}
          />
          <br />
        </div>
        <button type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  )
}