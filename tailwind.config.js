/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container:{
      center:true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: {
        'hero-header': "url('/mountain.jpeg')",
        
      }
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ['visited'],
    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ['visited'],
    }
  },
  plugins: [],
}

