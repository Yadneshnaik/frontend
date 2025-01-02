import React, { useState } from "react";

const OfferBanner = () => {
  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing the banner
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render the banner if it's not visible

  return (
    <div className="offer-banner alert-info alert-dismissible text-black py-2 px-3 d-flex align-items-center justify-content-between">
      <div className="offer-content">
        <p className="mb-0 text-center text-md-start">
          🎄 <strong>New Year Cheer Alert!</strong> Get Up to <strong>50% Off</strong> on All Services! 🎅 Limited Time Only – Don’t Miss Out!
        </p>
      </div>
      <button
        className="btn btn-sm btn-light text-danger ms-3"
        onClick={handleClose}
        aria-label="Close"
      >
        ✖
      </button>
    </div>
  );
};

export default OfferBanner;
