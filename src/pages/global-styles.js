import font1 from '../fonts/turkish_another_typewriter_regular-webfont.woff2';
import font2 from '../fonts/turkish_another_typewriter_regular-webfont.woff';

import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
@font-face {
  font-family: 'turkish_another_typewriterRg';
  src: url(${font1}) format('woff2'),
       url(${font2}) format('woff');
  font-weight: normal;
  font-style: normal;

}
body {
  font-family: 'turkish_another_typewriterRg';
}
@media (max-width: 960px) {

}

`
