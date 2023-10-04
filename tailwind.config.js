module.exports = {
  
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '5xl': '2100px',
        '6xl': '2600px',
      },
      colors: {
        "main-black": "#000000"
      },
      fontFamily: {
        fira: "'Fira Sans', sans-serif",
        dela: "'Dela Gothic One', sans-serif",
        akira: "Akira Expanded",
        "helvetica-regular": "Helvetica Now Display Regular",
        "helvetica-title": "Helvetica Now Display Title",
      },
      spacing: {
        '-px': '-1px',
        '-px-2': '-2px',
        '-px-3': '-3px',
        '-px-4': '-4px',
        '-px-5': '-5px',
        '-px-6': '-6px',
        '-px-7': '-7px',
        '-px-8': '-8px',
        '-px-9': '-9px',
        '-px-10': '-10px',
      },
      animation: {
        "slide-text": "slide-up 3s",
        "slide-right": "slide-right 0.7s forwards",
        "slide-left": "slide-left 0.7s forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "marquee2-right": "marquee2-right 25s linear infinite",
      },
      keyframes: {
        "slide-up": {
          from: { opacity: 0, "line-height": "150px" },
          to: { opacity: 1, "line-height": "25px" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "slide-left": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee2-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
