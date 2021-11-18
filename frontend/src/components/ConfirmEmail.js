import { useState } from 'react';
import { useParams } from "react-router"
import axios from "axios"
import { API } from '../api'

export function ConfirmEmail() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { key } = useParams()

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.post(API.auth.verifyEmail, {key})
            .then(res => {
                setSuccess(true)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div>
            {success && "Your email has been verified! You can now login"}
            {loading && "Loading..."}
            <form onSubmit={handleSubmit}>
                <button className="mt-3 bg-blue-100 rounded-md shadow-sm text-lg px-5 py-3 hover:bg-blue-200" 
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )

}