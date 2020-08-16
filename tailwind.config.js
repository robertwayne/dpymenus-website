/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'dis-blue': '#7289DA',
        'dis-light-grey': '#D9DDD4',
        'dis-grey': '#8E9297',
        'dis-dark': '#36393F',
        'dis-darker': '#2F3136',
        'dis-darkest': '#202225'
      }
    },
    typography: {
      default: {
        css: {
          color: '#D9DDD4',
          a: {
            color: '#7289DA',
            '&:hover': {
              color: '#D9DDD4'
            }
          },
          h2: {
            color: '#D9DDD4'
          },
          hr: {
            color: '#D9DDD4',
            'border-color': '#D9DDD4'
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
