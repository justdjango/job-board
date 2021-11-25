const debug = process.env.NODE_ENV !== "production"

let baseURL = "https://django-jobs.caprover.justdjango.com"
const apiURL = `${baseURL}/api`

if (debug) {
    baseURL = "http://127.0.0.1:8000"
}

export const API = {
    auth: {
        login: `${baseURL}/dj-rest-auth/login/`,
        logout: `${baseURL}/dj-rest-auth/logout/`,
        passwordReset: `${baseURL}/dj-rest-auth/password/reset/`,
        passwordResetConfirm: `${baseURL}/dj-rest-auth/password/reset/confirm/`,
        signup: `${baseURL}/dj-rest-auth/registration/`,
        verifyEmail: `${baseURL}/dj-rest-auth/registration/verify-email/`
    },
    payment: {
        createPayment: `${apiURL}/payments/create-payment/`,
    },
    jobs: {
        list: `${apiURL}/jobs/`,
        create: `${apiURL}/create-job/`,
        retrieve: id => `${apiURL}/jobs/${id}/`,
        update: id => `${apiURL}/jobs/${id}/update/`,
        delete: id => `${apiURL}/jobs/${id}/delete/`,
        sponsoredJobCount: `${apiURL}/sponsored-job-count/`
    }
}