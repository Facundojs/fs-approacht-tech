import Form from './form'

const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json'
}

const Login = () => {

  const Submit = ({ username, password }) => {
    fetch('http://localhost:3010/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
      .then(r => r.json())
      .then(console.log)
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={Submit} />
    </div>
  )
}
export default Login