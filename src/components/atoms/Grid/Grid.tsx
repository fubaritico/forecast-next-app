import { FC, PropsWithChildren } from 'react'

const Grid: FC<PropsWithChildren> = ({ children }) => (
  <section className="grid grid-cols-[1fr] max-w-xs text-center mb-[120px] md:grid-cols-[repeat(2,50%)] lg: w-[--max-width] lg:grid-cols-[repeat(4,minmax(25%,auto))] lg:max-w-full">
    {children}
  </section>
)

export default Grid
