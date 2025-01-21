/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(-180deg, rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      colors:{
// 'blue':"#00005c",
      },
    },
  },
  plugins: [],
}

