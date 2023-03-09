export const currentObservationPanel: GetDetailedForecatsResponse = {
  currentObservation: {
    id: '238701',
    lat: '50.6292',
    lon: '3.0573',
    cityName: 'Lille',
    countryCode: 'FR',
    weatherIcon: 'c03d',
    weatherDescription: 'Broken clouds',
    weatherCode: '803',
    temperature: '12°',
    sunrise: { date: '06:12', formatted: '7:12am' },
    sunset: { date: '17:42', formatted: '6:42pm' },
    dateLocal: {
      timestamp: 1678363319,
      weekDay: 'Thu',
      formatted: 'Thu, 1:01 pm',
    },
    apparentMaximumTemperature: '13°',
    apparentMinimumTemperature: '8°',
    windSpeed: '12.96km/h',
    dewPoint: '8°',
    relativeHumidity: '91%',
    pressure: '989.6mb',
    visibility: '7.037km',
    feelsLike: '10°',
  },
  dailyForecasts: [
    {
      id: '29737',
      apparentMaximumTemperature: '11°',
      apparentMinimumTemperature: '-1°',
      timestampLocal: {
        timestamp: 1678402860,
        weekDay: 'Fri',
        formatted: 'Fri, 12:01 am',
      },
      weatherIcon: 's04d',
      chancesOfRain: '65%',
    },
    {
      id: '96481',
      apparentMaximumTemperature: '4°',
      apparentMinimumTemperature: '-5°',
      timestampLocal: {
        timestamp: 1678489260,
        weekDay: 'Sat',
        formatted: 'Sat, 12:01 am',
      },
      weatherIcon: 'c02d',
      chancesOfRain: '25%',
    },
    {
      id: '196229',
      apparentMaximumTemperature: '13°',
      apparentMinimumTemperature: '0°',
      timestampLocal: {
        timestamp: 1678575660,
        weekDay: 'Sun',
        formatted: 'Sun, 12:01 am',
      },
      weatherIcon: 'c04d',
      chancesOfRain: '20%',
    },
    {
      id: '60647',
      apparentMaximumTemperature: '15°',
      apparentMinimumTemperature: '9°',
      timestampLocal: {
        timestamp: 1678662060,
        weekDay: 'Mon',
        formatted: 'Mon, 12:01 am',
      },
      weatherIcon: 'r04d',
      chancesOfRain: '65%',
    },
    {
      id: '622309',
      apparentMaximumTemperature: '9°',
      apparentMinimumTemperature: '-1°',
      timestampLocal: {
        timestamp: 1678748460,
        weekDay: 'Tue',
        formatted: 'Tue, 12:01 am',
      },
      weatherIcon: 'c04d',
      chancesOfRain: '45%',
    },
    {
      id: '904473',
      apparentMaximumTemperature: '9°',
      apparentMinimumTemperature: '-3°',
      timestampLocal: {
        timestamp: 1678834860,
        weekDay: 'Wed',
        formatted: 'Wed, 12:01 am',
      },
      weatherIcon: 'c02d',
      chancesOfRain: '20%',
    },
    {
      id: '415273',
      apparentMaximumTemperature: '8°',
      apparentMinimumTemperature: '2°',
      timestampLocal: {
        timestamp: 1678921260,
        weekDay: 'Thu',
        formatted: 'Thu, 12:01 am',
      },
      weatherIcon: 'r04d',
      chancesOfRain: '55%',
    },
  ],
  hourlyForecasts: {
    temperatures: [
      {
        chartValue: { value: 13.4, display: '13°' },
        timestampLocal: { value: '2023-03-09T14:00:00', display: 'NOW' },
      },
      {
        chartValue: { value: 13.8, display: '14°' },
        timestampLocal: { value: '2023-03-09T15:00:00', display: '3pm' },
      },
      {
        chartValue: { value: 13.4, display: '13°' },
        timestampLocal: { value: '2023-03-09T16:00:00', display: '4pm' },
      },
      {
        chartValue: { value: 11.6, display: '12°' },
        timestampLocal: { value: '2023-03-09T17:00:00', display: '5pm' },
      },
      {
        chartValue: { value: 11, display: '11°' },
        timestampLocal: { value: '2023-03-09T18:00:00', display: '6pm' },
      },
      {
        chartValue: { value: 10.6, display: '11°' },
        timestampLocal: { value: '2023-03-09T19:00:00', display: '7pm' },
      },
      {
        chartValue: { value: 10.6, display: '11°' },
        timestampLocal: { value: '2023-03-09T20:00:00', display: '8pm' },
      },
    ],
    chancesOfRain: [
      {
        chartValue: { value: 15, display: '15%' },
        timestampLocal: { value: '2023-03-09T14:00:00', display: 'NOW' },
      },
      {
        chartValue: { value: 70, display: '70%' },
        timestampLocal: { value: '2023-03-09T17:00:00', display: '5pm' },
      },
      {
        chartValue: { value: 35, display: '35%' },
        timestampLocal: { value: '2023-03-09T20:00:00', display: '8pm' },
      },
      {
        chartValue: { value: 55, display: '55%' },
        timestampLocal: { value: '2023-03-09T23:00:00', display: '11pm' },
      },
      {
        chartValue: { value: 15, display: '15%' },
        timestampLocal: { value: '2023-03-10T02:00:00', display: '2am' },
      },
      {
        chartValue: { value: 15, display: '15%' },
        timestampLocal: { value: '2023-03-10T05:00:00', display: '5am' },
      },
      {
        chartValue: { value: 20, display: '20%' },
        timestampLocal: { value: '2023-03-10T08:00:00', display: '8am' },
      },
    ],
  },
}
