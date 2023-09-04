import { applyDegreesShort } from '@Utils/server/units'
import { dateToWeekDay, round, timeToProps } from '@Utils/server/convert'
import { generateID } from '@Utils/server/miscellanous'

type Observations = WeatherbitAPI.CurrentObsGroup
type Observation = WeatherbitAPI.CurrentObs

export const currentObservationMapper = (
  currentObservation: Observation
): MappedObservation => {
  const mappedObservation: MappedObservation = {
    id: generateID().toString(),
    lat: currentObservation.lat.toString(),
    lon: currentObservation.lon.toString(),
    cityName: currentObservation.city_name,
    countryCode: currentObservation.country_code,
    weatherIcon: currentObservation.weather.icon || '',
    weatherDescription: currentObservation.weather.description || '',
    weatherCode: currentObservation.weather.code?.toString() || '',
    temperature: applyDegreesShort(round(currentObservation.app_temp)),
  }

  // non mandatory data
  mappedObservation.sunrise = timeToProps(
    currentObservation.sunrise,
    currentObservation.timezone
  )
  mappedObservation.sunset = timeToProps(
    currentObservation.sunset,
    currentObservation.timezone
  )
  mappedObservation.dateLocal = dateToWeekDay(
    currentObservation.ts,
    currentObservation.timezone
  )

  return mappedObservation
}

export const currentDefaultObservationsMapper = (
  observationResults: Observations[]
): MappedObservation[] =>
  observationResults
    .map((observationResult: Observations) =>
      observationResult.data.map((currentObservation: Observation) =>
        currentObservationMapper(currentObservation)
      )
    )
    .flat(1)
