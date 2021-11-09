const baseURL = "http://127.0.0.1:8000/api"

export const API = {
    jobs: {
        list: `${baseURL}/jobs/`,
        create: `${baseURL}/create-job/`,
        retrieve: id => `${baseURL}/jobs/${id}/`,
        update: id => `${baseURL}/jobs/${id}/update/`,
        delete: id => `${baseURL}/jobs/${id}/delete/`,
    }
}