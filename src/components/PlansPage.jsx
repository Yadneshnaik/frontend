    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { useParams, useLocation } from 'react-router-dom';

    function PlansPage() {
        const { serviceId } = useParams();
        const { state } = useLocation();
        const [plans, setPlans] = useState([]);
        const serviceTitle = state?.serviceTitle || 'Service Plans';

        useEffect(() => {
            // Fetch plans for the service
            axios.get(`https://backend-96jq.onrender.com/api/services/${serviceId}/plans`)
                .then(response => setPlans(response.data))
                .catch(err => console.error(err));
        }, [serviceId]);

        const handleBooking = async (planId) => {
            try {
                const response = await axios.post('https://backend-96jq.onrender.com/api/bookings', {
                    serviceId,
                    planId,
                });
                alert(response.data.message || 'Plan booked successfully!');
            } catch (error) {
                console.error('Error booking plan:', error);
                alert('Failed to book the plan. Please try again.');
            }
        };

        return (
            <div className="container my-5">
                <h1 className="text-center mb-4">{serviceTitle}</h1>
                <div className="row">
                    {plans.map(plan => (
                        <div className="col-md-4" key={plan._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{plan.name}</h5>
                                    <p className="card-text">Price: ₹{plan.price}</p>
                                    <ul>
                                        {plan.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={() => handleBooking(plan._id)}
                                    >
                                        Book This Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default PlansPage;
