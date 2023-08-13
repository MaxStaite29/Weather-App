import axios from "axios";

const getForecast = (setSelectedDate, setForcasts, setLocation) => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForcasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
