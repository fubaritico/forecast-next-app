'use client'

import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const srcCat = '/images/thirteen.svg'

const Thirteen: FC<PropsWithChildren> = () => (
  <div
    className={clsx(
      'flex justify-center items-center w-[75px] h-[75px] px-2.5 py-[25px] translate-z-0 overflow-hidden rounded-[12px] shadow-[0px_2px_8px_-1px_#0000001a]',
      "after:content-[''] after:absolute after:z-[-1] after:inset-0 after:p-[1px] after:rounded-[12px] after:bg-gradient-to-br after:from-appVeryLightGrey2 after:to-appVeryLightGrey3 after:bg-clip-content",
      "before:content-[''] before:absolute before:z-[-1] before:motion-safe:animate-spin-slow before:h-[200%] before:w-[200%]",
      'before:bg-[conic-gradient(var(--tw-gradient-stops))] from-slate-700 from-50% to-slate-300 to-100%'
    )}
  >
    <Image
      src={srcCat}
      loader={() => srcCat}
      alt="13"
      width={40}
      height={31}
      priority
    />
  </div>
)

export default Thirteen
