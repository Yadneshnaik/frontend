import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutUsPage() {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetching About Us content from the backend
    axios
      .get('https://backend-96jq.onrender.com/api/aboutus')
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching About Us content:', error);
        setError('Unable to load content. Please try again later.');
      });
  }, []);

  if (error) {
    return <div className="container my-5 text-danger">{error}</div>;
  }

  if (!aboutData) {
    return <div className="container my-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">{aboutData.title}</h1>
      <p>{aboutData.description}</p>

      <h2 className="mt-5">Our Mission</h2>
      <p>{aboutData.mission}</p>

      <h2 className="mt-4">Our Vision</h2>
      <p>{aboutData.vision}</p>
    </div>
  );
}

export default AboutUsPage;
