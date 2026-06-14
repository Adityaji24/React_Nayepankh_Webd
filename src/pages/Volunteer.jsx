import { useState } from "react";
import "../volunteer.css";

function Volunteer() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="volunteer-page">

      <div className="volunteer-container">

        <h1 className="volunteer-title">
          Become A Volunteer
        </h1>

        <p className="volunteer-subtitle">
          Join NayePankh Foundation and help create a
          positive impact in society.
        </p>

        <form
          className="volunteer-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
          />

          <select required>
            <option value="">
              Select Area of Interest
            </option>

            <option>Education</option>
            <option>Healthcare</option>
            <option>Community Support</option>
            <option>Women Empowerment</option>
          </select>

          <textarea
            rows="5"
            placeholder="Why do you want to volunteer?"
          />

          <button
            type="submit"
            className="register-btn"
          >
            Register Now
          </button>

        </form>

        {submitted && (
          <div className="success-box">
            🎉 Thank you for joining NayePankh Foundation!
          </div>
        )}

      </div>

    </div>
  );
}

export default Volunteer;