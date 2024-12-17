import React, { useState } from 'react';
import axios from 'axios';

function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://backend-nl6c.onrender.com/api/contacts', formData)
      .then(res => setResponse(res.data.message))
      .catch(err => console.error(err));
  };

  return (
    <div className="container my-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="4" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {response && <div className="alert alert-success mt-3">{response}</div>}
    </div>
  );
}

export default ContactUsPage;
