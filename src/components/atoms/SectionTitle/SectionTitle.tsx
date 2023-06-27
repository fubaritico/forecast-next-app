import { FC } from 'react'
import clsx from 'clsx'

type SectionTitleProps = {
  title: string
  className?: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => (
  <h3
    className={clsx(
      "font-mono flex items-center justify-start text-[14px] font-normal w-full text-white after:content-[' ']",
      'after:flex-1 after:border after:border-white after:opacity-40 after:my-0 after:ml-2 after:mr-0',
      className
    )}
  >
    {title.toUpperCase()}
  </h3>
)

export default SectionTitle
