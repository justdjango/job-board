import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { JobList } from './components/JobList'
import { JobDetail } from './components/JobDetail'
import { JobCreate } from './components/JobCreate'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/create-job">Add a Job</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/create-job" element={<JobCreate />} exact />
          <Route path="/" element={<JobList />} exact />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
