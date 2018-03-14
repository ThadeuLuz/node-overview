import React from 'react'
import ReactDOM from 'react-dom'
import slides from './slides'
import registerServiceWorker from './registerServiceWorker'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
import { Deck } from 'spectacle'

// Require CSS
// eslint-disable-next-line
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#0D6C0E', // Green
    tertiary: '#333333' // Dark Gray
  },
  {
    primary: 'Helvetica'
    // primary: "Montserrat",
    // secondary: "Helvetica"
  }
)

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={200} theme={theme}>
    {slides}
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById('root'))
registerServiceWorker()
