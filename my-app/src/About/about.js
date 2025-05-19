import React from 'react'

export default function About() {
  return (
<div className="container my-5">
      <h2 className="text-center text-primary mb-4">About Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h4 className="mb-3">Who We Are</h4>
            <p>
              We are a small but passionate team committed to building quality web experiences. Our focus is on simplicity, user-friendly design, and innovative solutions.
            </p>

            <h4 className="mt-4 mb-3">Our Mission</h4>
            <p>
              To provide reliable and easy-to-use digital products that help people and businesses succeed online.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="mb-3 text-success">Our Team</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card p-3 text-center shadow-sm">
              <h6 className="fw-bold">Shriram Thombare</h6>
              <p className="text-muted mb-0">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 text-center shadow-sm">
              <h6 className="fw-bold">Adity Mote</h6>
              <p className="text-muted mb-0">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
