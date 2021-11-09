import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
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
        {!jobs && "Loading..."}
        {jobs && jobs.map((job, i) => {
            return (
            <div key={i}>
                <NavLink to={`/jobs/${job.id}`}>
                    Job #{job.id}: {job.title}
                </NavLink>
            </div>
            )
        })}
    </div>
  );
}