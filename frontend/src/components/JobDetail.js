import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router"
import { API } from "../api"

export function JobDetail() {
    const [job, setJob] = useState(null)
    const { id } = useParams()

    useEffect(() => {
      function fetchJob() {
        axios.get(API.jobs.retrieve(id))
          .then(res => {
            console.log(res.data)
            setJob(res.data)
          })
      }
      fetchJob()
    }, [id])

    return (
        <div>
            {!job && "Loading..."}
            {job && (
                <div>
                    <div className="border border-gray-200 px-3 py-3 shadow-sm rounded-sm">
                        <div className="flex items-center justify-between">
                            <NavLink to={`/jobs/${job.id}`}>
                            <h3 className="text-2xl text-gray-800 font-semibold">{job.title}</h3>
                            </NavLink>
                            <div className='text-gray-800'>
                            Added on{" "}
                            {new Date(job.date_created).toDateString()}
                            </div>
                        </div>
                        <p className="mt-1 text-lg text-gray-600">${job.salary}</p>
                        <p className="mt-1 italic text-sm text-gray-500">
                            {job.company_name}
                            <a className="ml-3 text-blue-500 hover:text-blue-600 text-sm" href={job.company_website} target="_blank" rel="noopener noreferrer">
                            Visit website
                            </a>
                        </p>
                        {job.remote && (
                            <p className="text-gray-500">
                            Remote 📍
                            </p>
                        )}
                        {job.location && (
                            <p className="mt-2 text-gray-500">
                            {job.location}
                            </p>
                        )}
                        <p className="mt-3 text-gray-500">{job.description}</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <NavLink to={`/jobs/${id}/update`} 
                        className="bg-blue-100 rounded-md shadow-sm text-lg px-5 py-3 hover:bg-blue-200 ">
                            Update
                        </NavLink>
                        <NavLink to={`/jobs/${id}/delete`}
                        className="ml-2 bg-red-100 rounded-md shadow-sm text-lg px-5 py-3 hover:bg-red-200 ">
                            Delete
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}