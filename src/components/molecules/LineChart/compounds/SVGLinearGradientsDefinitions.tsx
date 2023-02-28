import { FC } from 'react'

type SVGLinearGradientsDefinitionsProps = {
  gradientColor?: string
}

const SVGLinearGradientsDefinitions: FC<SVGLinearGradientsDefinitionsProps> = ({
  gradientColor,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    style={{ position: 'fixed', left: -10000 }}
  >
    <defs>
      {gradientColor ? (
        <linearGradient
          id="gridGradient"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90)"
        >
          <stop stopColor={`${gradientColor}00`} offset="0%" />
          <stop stopColor={`${gradientColor}66`} offset="50%" />
          <stop stopColor={`${gradientColor}66`} offset="100%" />
        </linearGradient>
      ) : null}
    </defs>
  </svg>
)

export default SVGLinearGradientsDefinitions
