export const currentObservationPanel: GetDetailedForecatsResponse = {
  currentObservation: {
    cityName: 'Sainte-Thorette',
    weatherDescription: 'Scattered clouds',
    weatherIcon: 'c02n',
    sunrise: { date: '06:31', formatted: '7:31am' },
    sunset: { date: '17:31', formatted: '6:31pm' },
    temperature: '0°',
    dateLocal: {
      timestamp: 1677519542,
      weekDay: 'Mon',
      formatted: 'Mon, 6:39 pm',
    },
    apparentMaximumTemperature: '1°',
    apparentMinimumTemperature: '-7°',
    windSpeed: '20.88km/h',
    dewPoint: '-7°',
    relativeHumidity: '49%',
    pressure: '1004.7mb',
    visibility: '24.128km',
    feelsLike: '3°',
  },
  dailyForecasts: [
    {
      apparentMaximumTemperature: '0°',
      apparentMinimumTemperature: '-8°',
      timestampLocal: {
        timestamp: 1677538860,
        weekDay: 'Tue',
        formatted: 'Tue, 12:01 am',
      },
      weatherIcon: 's04d',
      chancesOfRain: '20%',
    },
    {
      apparentMaximumTemperature: '3°',
      apparentMinimumTemperature: '-8°',
      timestampLocal: {
        timestamp: 1677625260,
        weekDay: 'Wed',
        formatted: 'Wed, 12:01 am',
      },
      weatherIcon: 'c02d',
      chancesOfRain: '0%',
    },
    {
      apparentMaximumTemperature: '7°',
      apparentMinimumTemperature: '-6°',
      timestampLocal: {
        timestamp: 1677711660,
        weekDay: 'Thu',
        formatted: 'Thu, 12:01 am',
      },
      weatherIcon: 'c03d',
      chancesOfRain: '0%',
    },
    {
      apparentMaximumTemperature: '10°',
      apparentMinimumTemperature: '-3°',
      timestampLocal: {
        timestamp: 1677798060,
        weekDay: 'Fri',
        formatted: 'Fri, 12:01 am',
      },
      weatherIcon: 'c02d',
      chancesOfRain: '0%',
    },
    {
      apparentMaximumTemperature: '11°',
      apparentMinimumTemperature: '-3°',
      timestampLocal: {
        timestamp: 1677884460,
        weekDay: 'Sat',
        formatted: 'Sat, 12:01 am',
      },
      weatherIcon: 'c01d',
      chancesOfRain: '0%',
    },
    {
      apparentMaximumTemperature: '10°',
      apparentMinimumTemperature: '0°',
      timestampLocal: {
        timestamp: 1677970860,
        weekDay: 'Sun',
        formatted: 'Sun, 12:01 am',
      },
      weatherIcon: 'c02d',
      chancesOfRain: '0%',
    },
    {
      apparentMaximumTemperature: '4°',
      apparentMinimumTemperature: '-2°',
      timestampLocal: {
        timestamp: 1678057260,
        weekDay: 'Mon',
        formatted: 'Mon, 12:01 am',
      },
      weatherIcon: 's04d',
      chancesOfRain: '10%',
    },
  ],
  hourlyForecasts: {
    temperatures: [
      {
        chartValue: { value: 3.5, display: '4°' },
        timestampLocal: { value: '2023-02-27T19:00:00', display: 'NOW' },
      },
      {
        chartValue: { value: 2.9, display: '3°' },
        timestampLocal: { value: '2023-02-27T20:00:00', display: '8pm' },
      },
      {
        chartValue: { value: 2.2, display: '2°' },
        timestampLocal: { value: '2023-02-27T21:00:00', display: '9pm' },
      },
      {
        chartValue: { value: 1.6, display: '2°' },
        timestampLocal: { value: '2023-02-27T22:00:00', display: '10pm' },
      },
      {
        chartValue: { value: 0.9, display: '1°' },
        timestampLocal: { value: '2023-02-27T23:00:00', display: '11pm' },
      },
      {
        chartValue: { value: 0.2, display: '0°' },
        timestampLocal: { value: '2023-02-28T00:00:00', display: '12am' },
      },
      {
        chartValue: { value: -0.4, display: '0°' },
        timestampLocal: { value: '2023-02-28T01:00:00', display: '1am' },
      },
    ],
    chancesOfRain: [
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-27T19:00:00', display: '7pm' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-27T22:00:00', display: '10pm' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-28T01:00:00', display: '1am' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-28T04:00:00', display: '4am' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-28T07:00:00', display: '7am' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-28T10:00:00', display: '10am' },
      },
      {
        chartValue: { value: 0, display: '0%' },
        timestampLocal: { value: '2023-02-28T13:00:00', display: '1pm' },
      },
      {
        chartValue: { value: 15, display: '15%' },
        timestampLocal: { value: '2023-02-28T16:00:00', display: '4pm' },
      },
    ],
  },
}
