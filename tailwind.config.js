module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      spacing: {
        104: '28rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
