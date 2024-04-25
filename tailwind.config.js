/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        mdd: '761px',
        md: '768px',
        MaxMd: '768px',
        MinLg: '820px',
        lg: '1154px',
        xl: '1440px', 

        SmMini:{'max' : '320px'},
        SmMini2:{'max' : '380px'},
        sm3: {'max' : '480px'},
        sm2: {'max' : '520px'},
        sm4: {'max' : '589px'},
        Bsm2: {'max' : '600px'},
        Bsm3: {'max' : '679px'},
        mdd2: {'max' : '761px'},
        md2: {'max' : '768px'},
        md3: {'max' : '770px'},
        MinLg2: {'max' : '820px'}

      }
    },
  },
  plugins: [],
}

