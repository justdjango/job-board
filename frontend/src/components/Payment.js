import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from "react-router"
import { API } from "../api"
import { AuthContext } from "../contexts/AuthContext"
import { CheckoutForm } from './CheckoutForm'

const stripePromise = loadStripe('');


export function Payment() {
    const { user: { token } } = useContext(AuthContext)
    const { id } = useParams()
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axios.post(API.payment.createPayment, {
            job_id: id
        }, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => setClientSecret(res.data.clientSecret))
    }, [token, id]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    
    return (
        <div>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}