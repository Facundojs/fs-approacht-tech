import Form from './form'
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={console.log} />
    </div>
  )
}
export default Login