import { injectGlobal } from 'vue-styled-components'

import LibreBaskervilleRegular from '../assets/fonts/LibreBaskerville-Regular.otf'
import LibreBaskervilleBold from '../assets/fonts/LibreBaskerville-Bold.otf'

injectGlobal`
  @font-face {
      font-family: 'libre-v1';
      src: url(${LibreBaskervilleRegular}) format('otf');
      font-weight: 400;
  }
  @font-face {
      font-family: 'libre-v1';
      src: url(${LibreBaskervilleBold}) format('otf');
      font-weight: 700;
  }
`