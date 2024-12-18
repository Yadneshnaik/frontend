import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all services
    axios.get('https://backend-96jq.onrender.com/api/services')
      .then(response => setServices(response.data))
      .catch(err => console.error(err));
  }, []);

  const handleServiceClick = async (serviceId, serviceTitle) => {
    try {
      // Check if the service has plans
      const response = await axios.get(`https://backend-96jq.onrender.com/api/services/${serviceId}/plans`);
      if (response.data.length > 0) {
        // Navigate to the respective plans page
        navigate(`/plans/${serviceId}`, { state: { serviceTitle } });
      } else {
        // Navigate to the contact page
        navigate('/contactus');
      }
    } catch (error) {
      console.error('Error checking plans:', error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        {services.map(service => (
          <div className="col-md-4" key={service._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleServiceClick(service._id, service.title)}
                >
                  Explore {service.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
