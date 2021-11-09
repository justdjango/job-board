import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from "axios"

function JobList() {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    function fetchJobs() {
      axios.get("http://127.0.0.1:8000/api/jobs/")
        .then(res => {
          console.log(res.data)
          setJobs(res.data)
        })
    }
    fetchJobs()
  }, [])

  return (
    <div>
      {jobs && jobs.map((job, i) => {
        return (
          <div key={i}>
            Job #{job.id}: {job.title}
          </div>
        )
      })}
    </div>
  );
}

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
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<JobList />} />
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
