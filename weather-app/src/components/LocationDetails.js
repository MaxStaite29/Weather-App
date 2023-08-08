import React from "react";

function locationDetails(props) {
  const { city, country } = props;
  return (
    <div className="location-details">
      <h1>{`${city}, ${country}`}</h1>
    </div>
  );
}

export default locationDetails;
