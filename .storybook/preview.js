import 'keen-slider/keen-slider.min.css';
import '../src/shared/styles/fonts.css';
import '../src/shared/styles/palette.css';
import '../src/shared/styles/vars.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'lubimovka',
    values: [
      {
        name: 'lubimovka',
        value: '#ecebe8',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#fff',
      },
    ],
  },
}
