import { fromMillibarsToInchesOfMercury } from '@Utils/server/convert'

const units = (metric: boolean) => {
  if (metric) {
    return {
      temperature: 'C',
      speed: 'm/s',
      precipitation: 'mm',
      pressure: 'mb',
    }
  }

  return {
    temperature: 'F',
    speed: 'mph',
    precipitation: 'in',
    pressure: 'in',
  }
}

export const applyPercentage = (value?: number): Nullable<string> =>
  value?.toString() && `${value}%`
export const applyPressureUnits = (
  value?: number,
  metric = true
): Nullable<string> =>
  value?.toString() &&
  `${fromMillibarsToInchesOfMercury(value, metric)}${units(metric).pressure}`

export const applyKilometers = (value: Nullable<number>): Nullable<string> =>
  value?.toString() && `${value}km`
export const applyDegreesShort = (value: Nullable<number>): Nullable<string> =>
  value?.toString() && `${value}°`

// export const applyDegreesLong = (value: number, metric = true): string =>
//   `${value}°C`

export const applyKmPerHour = (value: Nullable<number>): Nullable<string> =>
  value?.toString() && `${value}km/h`
