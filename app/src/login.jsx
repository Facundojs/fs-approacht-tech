import Form from './form'

const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json'
}

const Login = () => {

  const Submit = ({ username, password }) => {
    return;
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={Submit} />
    </div>
  )
}
export default Login