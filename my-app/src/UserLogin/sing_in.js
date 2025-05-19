import { Link } from "react-router";

const Sing_in = () => {
  return (
       <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign In</h3>

        <form method="post" action="Login">
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

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account? <Link to={"/singIn"}>Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Sing_in;