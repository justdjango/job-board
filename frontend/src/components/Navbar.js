import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../contexts/AuthContext";
import { API } from "../api"

export function Navbar() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit() {
      axios.post(API.auth.logout)
        .then(res => {
          logout()
          navigate('/login')
        })
    }

    return (
        <nav className="max-w-4xl mx-auto py-5 px-4 border-b border-gray-200">
            <ul className="flex items-center justify-between">
              <div className="flex items-center">
                <li className="text-gray-600">
                  <Link className="hover:text-blue-600" to="/">Jobs</Link>
                </li>
                <li className="ml-5 text-gray-600">
                  <Link className="hover:text-blue-600" to="/create-job">Add a Job</Link>
                </li>
              </div>
              <div className="flex items-center">
                {user ? (
                  <li className="px-3 text-gray-600">
                    <button className="hover:text-blue-600" onClick={handleSubmit}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <div className="flex items-center">
                    <li className="px-3 text-gray-600">
                      <Link className="hover:text-blue-600" to="/signup">Signup</Link>
                    </li>
                    <li className="px-3 text-gray-600">
                      <Link className="hover:text-blue-600" to="/login">Login</Link>
                    </li>
                  </div>
                )}
              </div>
            </ul>
        </nav>
    )
}