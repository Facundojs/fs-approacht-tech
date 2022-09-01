const Dashboard = () => {

  const GetData = () => { return; }

  return (
    <div className="center">
      Dashboard
    </div>
  )
}
export default Dashboard

function Card({ title, content }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}