import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function Navbar() {
    const { user } = useContext(AuthContext)

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
                    <Link className="hover:text-blue-600" to="/logout">Logout</Link>
                  </li>
                ) : (
                  <li className="px-3 text-gray-600">
                      <Link className="hover:text-blue-600" to="/login">Login</Link>
                  </li>
                )}
              </div>
            </ul>
        </nav>
    )
}