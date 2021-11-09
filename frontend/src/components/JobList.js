import { useEffect, useState } from "react"
import axios from "axios"
import { API } from "../api"


export function JobList() {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    function fetchJobs() {
      axios.get(API.jobs.list)
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