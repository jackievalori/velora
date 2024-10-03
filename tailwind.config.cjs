/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
		'./**/*.liquid',
    './frontend/**/*.{js,ts,jsx,tsx}'
	],
  safelist: [
    '.content-left_top',
    'content-right_top',
    '.content-center_top',
    '.content-left',
    'content-right',
    '.content-center',
    '.content-left_bottom',
    'content-right_bottom',
    '.content-center_bottom',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 50s linear infinite',
        spin: 'spin 0.5s linear infinite'
      },
      aria: {
        unhidden: 'hidden="false"',
      },
      aspectRatio: {
        product: '5 / 7',
      },
      borderWidth: {
        '1': '1px',
      },
      colors: {
        error: '#FF0000',
        "cream": "#F1ECE3",
        "brown": {
          "DEFAULT": "#2B1D0A",
          "light": "#4A2425"
        },
        "blue": "#95A3B7"
      },
      fontFamily: {
        'arizona-flare': ['arizona-flare', 'serif'],
        'oracle': ['oracle', 'sans-serif'],
        'pangram': ['pangram', 'sans-serif']
      },
      fontSize: {
        // Headings
        //h1
        'arizona-80': ['80px', { lineHeight: '1', letterSpacing: '-0.03em', }],
        //h2
        'arizona-72': ['72px', { lineHeight: '1.2', letterSpacing: '-0.03em', }],
        //h3
        'arizona-60': ['60px', { lineHeight: '1.1', letterSpacing: '-0.0237em', }],
        //h4
        'arizona-48': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', }],
        //h5
        'arizona-36': ['36px', { lineHeight: '1.2', letterSpacing: '-0.015em', }],
        //h6
        'arizona-26': ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em', }],
        //'h7'
        'arizona-20': ['20px', { lineHeight: '1.1', letterSpacing: '0', }],
        //custom
        'arizona-custom': ['var(--size)'],
         // Mobile Headings

        // Body
        'body': ['18px', { lineHeight: '1.1', letterSpacing: '0', }],
        'oracle-18': ['18px', { lineHeight: '1.1', letterSpacing: '0', }],
        'oracle-16': ['16px', { lineHeight: '1.1', letterSpacing: '0', }],
        'oracle-14': ['14px', { lineHeight: '1.1', letterSpacing: '0', }],
        'oracle-12': ['12px', { lineHeight: '1.1', letterSpacing: '0', }],
        'oracle-custom': ['var(--size)'],
        // Mobile Body
        
        // Captions
        'pangram-20': ['20px', { lineHeight: '1.1', letterSpacing: '.1em', }],
        'pangram-16': ['16px', { lineHeight: '1', letterSpacing: '.1em', }],
        'pangram-14': ['14px', { lineHeight: '1', letterSpacing: '0.1em', }],
        'pangram-12': ['12px', { lineHeight: '1', letterSpacing: '.1em', }],
        'pangram-custom': ['var(--size)'],
      },
      gridTemplateColumns: {
        thirds: '1fr auto 1fr',
      },
      height: {
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      maxWidth: {
        'custom': 'var(--width)',
        '1440': '1440px',
        '1490': '1490px',
        '1610': '1610px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1600px'
      },
      spacing: {
        '0': '0px',
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '55': '55px',
        '60': '60px',
        '65': '65px',
        '70': '70px',
        '75': '75px',
        '80': '80px',
        '85': '85px',
        '90': '90px',
        '95': '95px',
        '100': '100px',
        '115': '115px',
        '120': '120px',
        '150': '150px',
        'half': '50%',
        'full': '100%',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        0: '0s',
        slow: '700ms',
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        color: 'color',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        opacity: 'opacity',
        position: 'top, right, bottom, left',
        size: 'height, width',
        transform: 'transform',
        visibility: 'opacity, visibility',
      },
      width: {

      },
      zIndex: {
        bottom: '-1',
        top: '999999',
      }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    plugin(function({ matchUtilities, theme}) {
      matchUtilities(
        {
          'aspect': (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              position: 'relative',
              '&::before': {
                content: '""',
                float: 'left',
                paddingTop: `calc(100%/ (${value}))`,
              },
              '&::after': {
                clear: 'left',
                content: '""',
                display: 'block'
              }
            },
          }),
        },
        { values: theme('aspectRatio')}
      )
    })
  ]
}