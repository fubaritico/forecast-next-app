import { rem } from 'polished'

import { SPACING_2, SPACING_5 } from '@Styles/constants/spacing'

/* Hauteur de l'appBar pour écran tablette et desktop */
export const APPBAR_HEIGHT = rem(56)
/* Hauteur de l'appBar pour écran tablette et desktop */
export const APPBAR_MD_HEIGHT = rem(72)
/* Hauteur avec appBar + tabBar */
export const HEIGHT_WITH_TABBAR_AND_APPBAR = `calc(100% - ${rem(136)})`
/* Hauteur de la modale du bot */
export const HEIGHT_WITH_SEARCHBAR = `calc(100% - ${rem(16)})`
/* Offset top utile au conteneur sticky de droite du layout */
export const RIGHT_CONTAINER_TOP_OFFSET = `calc(${APPBAR_MD_HEIGHT} + ${SPACING_5})`
/* Hauteur NavBar */
export const HEIGHT_NAVBAR = 48
export const HEIGHT_NAVBAR_MEDIUM_UP = 64

/* Espacement contenu */
export const CONTENT_PADDING_SM = SPACING_2

export const Z_INDEX_LOW = 1
export const Z_INDEX_MEDIUM = 2
export const Z_INDEX_MEDIUM_HIGH = 3
export const Z_INDEX_HIGH = 4

export const Z_INDEX_NAVBAR_BACKDROP = 1200
export const Z_INDEX_HEADER = 1202
export const Z_INDEX_HEADER_MASK = 1201
export const Z_INDEX_AY11_SKIP_LINKS = 1201
