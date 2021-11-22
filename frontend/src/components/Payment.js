import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { API } from "../api"
import { AuthContext } from "../contexts/AuthContext"
import { CheckoutForm } from './CheckoutForm'

const stripePromise = loadStripe('');


export function Payment() {
    const { user: { token } } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    console.log(clientSecret)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axios.post(API.payment.createPayment, {}, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => setClientSecret(res.data.clientSecret))
    }, [token]);

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