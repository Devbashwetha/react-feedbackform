

import React, { useState } from "react";
import "../styles/Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const [arr, setArr] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setArr((prevArr) => [...prevArr, formData]);

    setFormData({
      name: "",
      feedback: "",
    });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Feedback Form</h1>
{/* <br></br> */}
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="feedback">Feedback:</label>

        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Enter your feedback"
          required
        />

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>

      <div className="feedback-list">
        <h3>Submitted Feedback</h3>

        {arr.map((item, index) => (
          <div key={index} className="feedback-entry">
            <p>
              <strong>Name:</strong> {item.name}
            </p>

            <p>
              <strong>Feedback:</strong> {item.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

