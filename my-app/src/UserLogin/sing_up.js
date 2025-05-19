import React from 'react'
import { Link } from 'react-router'

export default function Sing_up() {
  return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form method="post" action="Register">
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="name"
              required
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="pass"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to={"/singUp"}>Login</Link>
          </small>
        </div>
      </div>
    </div>
  )
}
