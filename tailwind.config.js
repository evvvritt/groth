module.exports = {
  prefix: '',
  important: false,
  separator: '-',
  theme: {
    screens: {
      sm: '599px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    spacing: {
      px: '1px',
      '1em': '1em',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '5vmx': '5vmax'
    },
    fontSize: {
      xxs: '0.66em',
      xs: '0.8em',
      sm: '0.875em',
      base: '1em',
      lg: '1.125em',
      xl: '1.25em',
      '2xl': '1.5em',
      '3xl': '1.875em',
      '4xl': '2.25em',
      '5xl': '3em',
      '6xl': '4em'
    },
    colors: {
      'transparent': 'transparent',
      'inherit': 'inherit',

      'black': 'black', // '#22292f',
      'grey-darkest': 'var(--grey-darkest)',
      'grey-darker': '#606f7b',
      'grey-dark': '#8795a1',
      'grey': '#b8c2cc',
      'grey-light': '#dae1e7',
      'grey-lighter': '#f1f5f8',
      'grey-lightest': '#f8fafc',
      'white': '#ffffff',
      'off-white': 'rgb(250,250,250)'
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor')
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none'
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    fill: {
      current: 'currentColor'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      '0': '0',
      default: '1'
    },
    flexShrink: {
      '0': '0',
      default: '1'
    },
    fontFamily: {
      sans: [
        'Violet Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      '50vh': '50vh',
      '75vh': '75vh'
    }),
    inset: {
      '0': '0',
      auto: 'auto'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh'
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%'
    },
    minHeight: theme => ({
      ...theme('spacing'),
      '0': '0',
      full: '100%',
      screen: '100vh'
    }),
    minWidth: {
      '0': '0',
      full: '100%'
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },
    padding: theme => ({
      ...theme('spacing'),
      full: '100%'
    }),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor'
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1x2': '50%',
      '1x3': '33.333333%',
      '2x3': '66.666667%',
      '1x4': '25%',
      '2x4': '50%',
      '3x4': '75%',
      '1x5': '20%',
      '2x5': '40%',
      '3x5': '60%',
      '4x5': '80%',
      '1x6': '16.666667%',
      '2x6': '33.333333%',
      '3x6': '50%',
      '4x6': '66.666667%',
      '5x6': '83.333333%',
      '1x12': '8.333333%',
      '2x12': '16.666667%',
      '3x12': '25%',
      '4x12': '33.333333%',
      '5x12': '41.666667%',
      '6x12': '50%',
      '7x12': '58.333333%',
      '8x12': '66.666667%',
      '9x12': '75%',
      '10x12': '83.333333%',
      '11x12': '91.666667%',
      full: '100%',
      screen: '100vw'
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
    }
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtils = {
        '.top-100': { top: '100%' },
        '.translx-100': { transform: 'translateX(100%)' },
        '.translx_-100': { transform: 'translateX(-100%)' }
      }
      addUtilities(newUtils, ['responsive'])
    }
  ]
}
