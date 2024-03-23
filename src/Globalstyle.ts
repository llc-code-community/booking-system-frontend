import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

import HelveticaNowDisplayBoldttf from './assets/fonts/HelveticaNowDisplay-Bold.ttf';
import HelveticaNowDisplayBoldwoff from './assets/fonts/HelveticaNowDisplay-Bold.woff';
import HelveticaNowDisplayBoldwoff2 from './assets/fonts/HelveticaNowDisplay-Bold.woff2';
import HelveticaNowDisplayLightttf from './assets/fonts/HelveticaNowDisplay-Light.ttf';
import HelveticaNowDisplayLightwoff from './assets/fonts/HelveticaNowDisplay-Light.woff';
import HelveticaNowDisplayLightwoff2 from './assets/fonts/HelveticaNowDisplay-Light.woff2';
import HelveticaNowDisplayMediumttf from './assets/fonts/HelveticaNowDisplay-Medium.ttf';
import HelveticaNowDisplayMediumwoff from './assets/fonts/HelveticaNowDisplay-Medium.woff';
import HelveticaNowDisplayMediumwoff2 from './assets/fonts/HelveticaNowDisplay-Medium.woff2';
import HelveticaNowDisplayRegularttf from './assets/fonts/HelveticaNowDisplay-Regular.ttf';
import HelveticaNowDisplayRegularwoff from './assets/fonts/HelveticaNowDisplay-Regular.woff';
import HelveticaNowDisplayRegularwoff2 from './assets/fonts/HelveticaNowDisplay-Regular.woff2';

export function fontFace(
  name: string,
  srcwoff2: string,
  srcwoff: string,
  srcttf: string,
  fontWeight = 400,
  fontStyle = 'normal'
) {
  return `
      @font-face{
          font-family: ${name};
          src: url(${srcwoff2}) format('woff2'),
					url(${srcwoff}) format('woff'),
					url(${srcttf}) format("truetype");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

export const GlobalStyle = createGlobalStyle`
	${fontFace('Helvetica Now Display Light', HelveticaNowDisplayLightwoff2, HelveticaNowDisplayLightwoff, HelveticaNowDisplayLightttf, 300)}
	${fontFace('Helvetica Now Display Regular', HelveticaNowDisplayRegularwoff2, HelveticaNowDisplayRegularwoff, HelveticaNowDisplayRegularttf)}
	${fontFace('Helvetica Now Display Medium', HelveticaNowDisplayMediumwoff2, HelveticaNowDisplayMediumwoff, HelveticaNowDisplayMediumttf, 500)}
	${fontFace('Helvetica Now Display Bold', HelveticaNowDisplayBoldwoff2, HelveticaNowDisplayBoldwoff, HelveticaNowDisplayBoldttf, 700)}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Helvetica Now Display Regular';
		font-size: 16px;
		margin: 0;
		background-color: ${props => props.theme.PrimaryWhite};
		color: ${props => props.theme.PrimaryColorBlack};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	a {
  	text-decoration: none;
	}

	ul, ol {
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	input,
	button,
	label {
		display: block;
	}

	button {
  cursor: pointer;
		padding: 0;
	}

	svg {
		display: block;
		margin: 0;
		padding: 0;
	}
`;
