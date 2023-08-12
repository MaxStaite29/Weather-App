import React from "react";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        Min Temperature: {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__max-temp">
        Max Temperature: {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}%
      </div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {forecast.wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {forecast.wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
