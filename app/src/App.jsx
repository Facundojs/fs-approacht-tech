import { Route, Routes, Link } from 'react-router-dom'

import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'

function App() {
  return (
    <>
    <header>
        <h1>Approach Tech</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login" >login</Link>
            </li>
            <li>
              <Link to="/signup" >signup</Link>
            </li>
            <li>
              <Link to="/dashboard" >dashboard</Link>
            </li>
          </ul>
        </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
