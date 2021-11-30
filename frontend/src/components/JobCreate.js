import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { API } from '../api'
import { AuthContext } from "../contexts/AuthContext";

function ImagePreview({ file }) {
    const [imageSrc, setImageSrc] = useState(null)

    useEffect(() => {
        const reader = new FileReader()
        reader.onloadend = () => {
            setImageSrc(reader.result)
        }
        reader.readAsDataURL(file)
    })

    return (
        <div>
            {!imageSrc && "Loading..."}
            {imageSrc && (
                <img src={imageSrc} className="h-20 w-20 px-3 py-3" alt={file.name} />
            )}
        </div>
    )
}

export function JobCreate() {
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    let token = ""
    if (user) {
        token = user.token
    }
    
    function handleSubmit(values) {
        setLoading(true)
        const data = new FormData()
        if (file) {
            data.append('company_logo', file)
        }
        data.append('title', values.title)
        data.append('company_name', values.company_name)
        data.append('company_website', values.company_website)
        data.append('location', values.location)
        data.append('salary', values.salary)
        axios.post(API.jobs.create, data, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => {
                navigate('/')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            {loading && "Loading..."}
            <Formik
                initialValues={{
                    title: 'Software developer',
                    company_name: 'Facebook',
                    company_logo: "",
                    company_website: 'https://facebook.com',
                    location:'California',
                    salary: 100000
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

                        <div className="flex items-center">
                            <label className="mt-3 block">
                                <span className="text-gray-700">Company Logo</span>
                                <input
                                onChange={e => setFile(e.target.files[0])}
                                type="file"
                                className="
                                    mt-1
                                    block
                                    w-full
                                    rounded-md
                                    border-gray-300
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                "
                                />
                            </label>
                            {file && (
                                <ImagePreview file={file} />
                            )}
                        </div>
                           
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
        </div>
    )

}