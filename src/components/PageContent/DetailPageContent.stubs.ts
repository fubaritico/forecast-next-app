const detailedForecasts: GetDetailedForecatsResponse = {
  cityName: 'Sainte-Thorette',
  weatherDescription: 'Few clouds',
  weatherIcon: 'c02d',
  timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
  apparentMaximumTemperature: '13.6°C',
  apparentMinimumTemperature: '-4.8°C',
  windSpeed: '6.84km/h',
  dewPoint: '4.8°',
  relativeHumidity: '81%',
  pressure: '1010.5mb',
  visibility: '24.128km',
  averageTemperature: '8.1°',
  dailyForecasts: [
    {
      apparentMaximumTemperature: '15.3°',
      apparentMinimumTemperature: '-1.3°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'c02d',
      relativeHumidity: '78%',
    },
    {
      apparentMaximumTemperature: '12.6°',
      apparentMinimumTemperature: '3.9°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'r04d',
      relativeHumidity: '88%',
    },
    {
      apparentMaximumTemperature: '8.5°',
      apparentMinimumTemperature: '0.8°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'r01d',
      relativeHumidity: '93%',
    },
    {
      apparentMaximumTemperature: '12.4°',
      apparentMinimumTemperature: '2.7°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'c04d',
      relativeHumidity: '89%',
    },
    {
      apparentMaximumTemperature: '8.2°',
      apparentMinimumTemperature: '-1.7°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'c03d',
      relativeHumidity: '77%',
    },
    {
      apparentMaximumTemperature: '0.8°',
      apparentMinimumTemperature: '-6.3°',
      timestampLocal: { weekDay: 'Mon', formatted: 'Mon, 5:32 pm' },
      weatherIcon: 'c02d',
      relativeHumidity: '66%',
    },
  ],
  sunrise: 'Mon 20th Feb 2023, 07:48:24 am',
  sunset: 'Mon 20th Feb 2023, 06:25:14 pm',
  hourlyForecasts: {
    temperatures: [
      {
        temperature: { value: 11.5, display: '12°' },
        timestampLocal: { value: '2023-02-20T18:00:00', display: 'NOW' },
      },
      {
        temperature: { value: 9.5, display: '10°' },
        timestampLocal: { value: '2023-02-20T19:00:00', display: '7pm' },
      },
      {
        temperature: { value: 8.1, display: '8°' },
        timestampLocal: { value: '2023-02-20T20:00:00', display: '8pm' },
      },
      {
        temperature: { value: 7.2, display: '7°' },
        timestampLocal: { value: '2023-02-20T21:00:00', display: '9pm' },
      },
      {
        temperature: { value: 6.6, display: '7°' },
        timestampLocal: { value: '2023-02-20T22:00:00', display: '10pm' },
      },
      {
        temperature: { value: 6.2, display: '6°' },
        timestampLocal: { value: '2023-02-20T23:00:00', display: '11pm' },
      },
      {
        temperature: { value: 5.9, display: '6°' },
        timestampLocal: { value: '2023-02-21T00:00:00', display: '12am' },
      },
    ],
    chancesOfRain: [
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-20T18:00:00', display: 'NOW' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-20T21:00:00', display: '9pm' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T00:00:00', display: '12am' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T03:00:00', display: '3am' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T06:00:00', display: '6am' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T09:00:00', display: '9am' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T12:00:00', display: '12pm' },
      },
      {
        chancesOfRain: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-21T15:00:00', display: '3pm' },
      },
    ],
  },
}

export default detailedForecasts
