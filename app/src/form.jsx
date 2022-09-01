import { useState } from "react"

const Form = ({ onSubmit }) => {

  const [form, setForm] = useState({
    "username": "facundo",
    "password": "1234"
  })

  const Submit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <div>
      <form
        onSubmit={Submit}>
        <input
          onChange={(e) => setForm(p => ({...p, username: e.target.value}))}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setForm(p => ({...p, password: e.target.value}))}
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Form