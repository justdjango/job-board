import { useEffect, useState } from "react"
import axios from "axios"

function App() {
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
        <div key={i}>
          a new job
        </div>
      })}
    </div>
  );
}

export default App;
