module.exports = {
  content: [
    './pages/**/*.html', // Adjust this to point to your HTML files in the 'pages' folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('../img/bg-login.png')",
      },
      backgroundColor: {
        'vlu': '#1A1851',
        'vluu': '#333087',
      },
    },
  },
  plugins: [],
};
