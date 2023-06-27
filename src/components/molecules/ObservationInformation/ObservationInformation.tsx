import { ComponentType, FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

type ObservationInformationProps = {
  className?: string
  icon: HTMLAttributes<SVGElement> & ComponentType<HTMLAttributes<SVGElement>>
  label: string
  value?: string
}

const ObservationInformation: FC<ObservationInformationProps> = ({
  className,
  icon: Icon,
  label,
  value,
}) => (
  <div
    className={clsx(
      'flex items-center justify-center font-mono flex-col p-2 bg-[#ffffff33] rounded-[4px]',
      className
    )}
  >
    <div className="w-[32px]">
      {Icon && <Icon aria-hidden className="fill-white" />}
    </div>
    <span className="text-white text-[13px] font-light text-center">
      {label}
    </span>
    <span className="text-white text-[16px] font-normal">{value || 'N/A'}</span>
  </div>
)

export default ObservationInformation
