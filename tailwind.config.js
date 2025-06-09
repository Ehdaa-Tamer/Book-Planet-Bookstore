/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#0D1C9B',
        'gradient-middle': '#5E94D4',
        'gradient-end': '#553190',
        bg:"#EFF3FB",
        bgHover:"#5e93d41a",
        body:'#1C1C1E',
        bodyDark:'#FFFFFF',
        description:'#555555',
        descriptionDark:'#DCDCDC',
        heading:'#111111',
        headingDark:'#FFFFFF',
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      backgroundImage: {
        primary: 'linear-gradient(135deg, #0D1C9B, #5E94D4, #553190)',
        secondary: 'linear-gradient(135deg, rgba(13, 28, 155, 0.9), rgba(94, 148, 212, 0.9), rgba(85, 49, 144, 0.9))',
        primaryDark:'linear-gradient(135deg, #3446E7, #4C84C8, #8D5BDF)'
        
       
      },
      screens:{
        xs:'350px'
      }
    
      
    },
  },
  plugins: [],
}