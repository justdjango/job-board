import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext, AuthContextProvider } from './contexts/AuthContext'
import { JobList } from './components/JobList'
import { JobDetail } from './components/JobDetail'
import { JobCreate } from './components/JobCreate'
import { Login } from './components/Login'
import { Navbar } from "./components/Navbar";
import { JobUpdate } from "./components/JobUpdate";
import { JobDelete } from "./components/JobDelete";
import { Signup } from "./components/Signup";
import { ConfirmEmail } from "./components/ConfirmEmail";
import { Payment } from "./components/Payment";
import { Success } from "./components/Success";


function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate replace to="/login" />
}

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Navbar />          

          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className="max-w-4xl mx-auto py-5 px-4">
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/users" element={<Users />} />
              <Route path="/jobs/:id" element={<PrivateRoute><JobDetail /></PrivateRoute>} exact />
              <Route path="/jobs/:id/update" element={<PrivateRoute><JobUpdate /></PrivateRoute>} exact />
              <Route path="/jobs/:id/delete" element={<PrivateRoute><JobDelete /></PrivateRoute>} exact />
              <Route path="/jobs/:id/sponsor" element={<PrivateRoute><Payment /></PrivateRoute>} exact />
              <Route path="/create-job" element={<PrivateRoute><JobCreate /></PrivateRoute>} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="/signup" element={<Signup />} exact />
              <Route path="/payment/success" element={<Success />} exact />
              <Route path="/accounts/confirm-email/:key" element={<ConfirmEmail />} exact />
              <Route path="/" element={<JobList />} exact />
            </Routes>
          </div>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
