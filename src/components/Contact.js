
import React, { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormSubmitted(true);
  };

  useEffect(() => {
    //logic after form submission
  }, [formSubmitted]);

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        {formSubmitted ? (
          <div>
            <p>Thank you for contacting us! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
