const baseURL = "http://127.0.0.1:8000"
const apiURL = `${baseURL}/api`

export const API = {
    auth: {
        login: `${baseURL}/auth-token/`
    },
    jobs: {
        list: `${apiURL}/jobs/`,
        create: `${apiURL}/create-job/`,
        retrieve: id => `${apiURL}/jobs/${id}/`,
        update: id => `${apiURL}/jobs/${id}/update/`,
        delete: id => `${apiURL}/jobs/${id}/delete/`,
    }
}