import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "variable-collection-primary": "var(--variable-collection-primary)",
        "variable-collection-primary-hover": "var(--variable-collection-primary-hover)",
        "variable-collection-secondary": "var(--variable-collection-secondary)",
        "variable-collection-tertiary": "var(--variable-collection-tertiary)",
        "variable-collection-text-1": "var(--variable-collection-text-1)",
        "variable-collection-text-2": "var(--variable-collection-text-2)",
        "variable-collection-text-3": "var(--variable-collection-text-3)",
      },
    },
    colors: {
      gray : colors.gray,
      neutral : colors.neutral,
      red : colors.red,
      orange : colors.orange,
      yellow : colors.yellow,
      green : colors.green,
      blue : colors.blue,
      purple : colors.purple,
      black: colors.black,
      white: colors.white,
      'primary' : {
        '100' : '#58C179',
        '200' : '#86C158',
        '300' : '#D4C261',
      },
      'text' : {
        '100' : '#6b6c6d',
        '200' : '#999999',
        '300' : '#d9d9d9',
      },
      'error' : {
        '100' : '#FF0000'
      }
    },
    boxShadow: {
      '3xl': 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
    }

  },
  plugins: [],
}
export default config
