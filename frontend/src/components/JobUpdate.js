import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API } from '../api'
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from 'react-router';

export function JobUpdate() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [loadingJob, setLoadingJob] = useState(false)

    const [job, setJob] = useState(null)
    const { id } = useParams()

    const { user: { token } } = useContext(AuthContext)
    
    useEffect(() => {
        setLoadingJob(true)
        function fetchJob() {
            axios.get(API.jobs.retrieve(id))
                .then(res => {
                    setJob(res.data)
                })
                .finally(() => {
                    setLoadingJob(false)
                })
        }
        fetchJob()
        return () => null
    }, [id])

    function handleSubmit(values) {
        setLoading(true)
        axios.put(API.jobs.update(id), values, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => {
                navigate(`/jobs/${id}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            {loading && "Submitting..."}
            {loadingJob && "Fetching Job Details..."}
            {job && (
                <Formik
                    initialValues={{
                        title: job.title,
                        company_name: job.company_name,
                        company_website: job.company_website,
                        location: job.location,
                        salary: job.salary
                    }}
                    onSubmit={handleSubmit}>

                    {({ errors, touched }) => (
                        <Form>
                            <Field name="title">
                                {({ field, form }) => (
                                    <label className="mt-3 block">
                                        <span className="text-gray-700">Title</span>
                                        <input
                                        {...field}
                                        type="text"
                                        className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder="Software developer"
                                        style={
                                            form.touched.title && form.errors.title ? (
                                                { border: '2px solid var(--primary-red)'}
                                            ) : null
                                        }
                                        />
                                    </label>
                                )}
                            </Field>

                            <Field name="company_name">
                                {({ field, form }) => (
                                    <label className="mt-3 block">
                                        <span className="text-gray-700">Company Name</span>
                                        <input
                                        {...field}
                                        type="text"
                                        className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder="Facebook"
                                        style={
                                            form.touched.company_name && form.errors.company_name ? (
                                                { border: '2px solid var(--primary-red)'}
                                            ) : null
                                        }
                                        />
                                    </label>
                                )}
                            </Field>

                            <Field name="company_website">
                                {({ field, form }) => (
                                    <label className="mt-3 block">
                                        <span className="text-gray-700">Company Website URL</span>
                                        <input
                                        {...field}
                                        type="text"
                                        className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder="https://www..."
                                        style={
                                            form.touched.company_website && form.errors.company_website ? (
                                                { border: '2px solid var(--primary-red)'}
                                            ) : null
                                        }
                                        />
                                    </label>
                                )}
                            </Field>

                            <Field name="location">
                                {({ field, form }) => (
                                    <label className="mt-3 block">
                                        <span className="text-gray-700">Location</span>
                                        <input
                                        {...field}
                                        type="text"
                                        className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder="California"
                                        style={
                                            form.touched.location && form.errors.location ? (
                                                { border: '2px solid var(--primary-red)'}
                                            ) : null
                                        }
                                        />
                                    </label>
                                )}
                            </Field>

                            <Field name="salary">
                                {({ field, form }) => (
                                    <label className="mt-3 block">
                                        <span className="text-gray-700">Salary</span>
                                        <input
                                        {...field}
                                        type="number"
                                        className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        style={
                                            form.touched.salary && form.errors.salary ? (
                                                { border: '2px solid var(--primary-red)'}
                                            ) : null
                                        }
                                        />
                                    </label>
                                )}
                            </Field>

                            <button type="submit" className="mt-3 bg-blue-100 rounded-md shadow-sm text-lg px-5 py-3 hover:bg-blue-200 ">Submit</button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    )

}