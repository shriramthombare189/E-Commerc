import React from 'react'

export default function Contact() {
  return (
       <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">We’d love to hear from you! Fill in the form and our team will get back to you shortly.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-chat-right-text-fill"></i></span>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
