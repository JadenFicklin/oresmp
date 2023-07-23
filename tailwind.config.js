/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '289px',
            sm: '640px',
            md: '768px',
            smlg: '920px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {}
    },
    plugins: []
};
