/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(-180deg, rgba(0,0,255,0.7),rgba(0,0,200,1)), url('https://images.unsplash.com/photo-1618329027137-a520b57c6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBlZGl0aW5nJTIwc3R1ZGlvfGVufDB8fDB8fHww')",
      },
      colors:{
// 'blue':"#00005c",
      },
    },
  },
  plugins: [],
}

