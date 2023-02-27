import { rem } from 'polished'

export const SPACING_BASE = 8

export const SPACING_0 = rem(SPACING_BASE / 2) // 4
export const SPACING_1 = rem(SPACING_BASE) // 8
export const SPACING_2 = rem(SPACING_BASE * 2) // 16
export const SPACING_3 = rem(SPACING_BASE * 3) // 24
export const SPACING_4 = rem(SPACING_BASE * 4) // 32
export const SPACING_5 = rem(SPACING_BASE * 5) // 40
export const SPACING_6 = rem(SPACING_BASE * 6) // 48
export const SPACING_7 = rem(SPACING_BASE * 7) // 56
export const SPACING_8 = rem(SPACING_BASE * 8) // 64

/**
 * Multiply a given number by SPACING_BASE ( == 8 ) ({@link https://www.figma.com/file/sYM1vW0ZdHPRIzhrkTSXEn/Composants-DS?node-id=5050%3A162|according to the design system}) and convert the result to rem
 *
 * @param {number} multiplier
 * @returns {string} spacing (in rem)
 */
export const spacing = (multiplier: number): string =>
  rem(multiplier * SPACING_BASE)
