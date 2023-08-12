import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 80,
    wind: {
      speed: 150,
      direction: "e",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText(/Mon Apr 30 2018/i)).toHaveClass("forecast-details__date");
    expect(getByText(/22°C/i)).toHaveClass("forecast-details__max-temp");
    expect(getByText(/12°C/i)).toHaveClass("forecast-details__min-temp");
    expect(getByText(/80%/i)).toHaveClass("forecast-details__humidity");
    expect(getByText(/150 mph/i)).toHaveClass("forecast-details__wind-speed");
    expect(getByText(/Direction: e/i)).toHaveClass(
      "forecast-details__wind-direction",
    );
  });
});
