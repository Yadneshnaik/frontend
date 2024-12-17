import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutUsPage() {
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    // Fetching About Us content from the backend
    axios
      .get('http://localhost:5000/api/aboutus')
      .then((response) => {
        setAboutContent(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching About Us content:', error);
        setAboutContent('Unable to load content. Please try again later.');
      });
  }, []);

  return (
    <div className="container my-5">
      <h1>About Us</h1>
      <p>{aboutContent}</p>
    </div>
  );
}

export default AboutUsPage;
