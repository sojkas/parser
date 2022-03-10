module.exports = {
  content: ["./src/*.{html,js}","./src/components/*.js"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '3px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      height: {
        '85vh': '85vh',
      },
      colors: {
        'mainBlue' : '#0366d6',
        'placeholderColor': '#586069',
        'textColor':'#2c2e2f',
        'borderColor':'#444d56'
      },
    },
    
  },
  plugins: [],
}
