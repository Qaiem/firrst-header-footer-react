import React, { useState } from 'react';
import './CONTACT.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('Please confirm that you are not a robot.');
      return;
    }
    // Handle form submission
  };

  return (
    // <div>
    //   <h1></h1>
    // </div>
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>CONTACT</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            I'm not a robot
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
