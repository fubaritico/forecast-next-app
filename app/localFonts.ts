import localFont from 'next/font/local'

export const Inter = localFont({
  src: [
    {
      path: './fonts/inter-v12-latin-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})

export const HelveticaNeueLT = localFont({
  src: [
    {
      path: './fonts/610d82c5-3398-43d5-ba50-a723a7fee1df.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/bb27f557-f7ae-41b7-9351-87ec43e9588d.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue-lt',
})
