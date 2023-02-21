import { FC } from 'react'

type SVGLinearGradientsDefinitionsProps = {
  gridGradient?: string
}

const SVGLinearGradientsDefinitions: FC<SVGLinearGradientsDefinitionsProps> = ({
  gridGradient,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    style={{ position: 'fixed', left: -10000 }}
  >
    <defs>
      {gridGradient ? (
        <linearGradient
          id="gridGradient"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90)"
        >
          <stop stopColor="transparent" offset="0%" />
          <stop stopColor={gridGradient} offset="50%" />
          <stop stopColor={gridGradient} offset="100%" />
        </linearGradient>
      ) : null}
    </defs>
  </svg>
)

export default SVGLinearGradientsDefinitions
