/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                "primary-dark": "var(--primary-dark)",
                secondary: "var(--secondary)",
                text: "var(--text)",
                bg: "var(--bg)",
                card: "var(--card)",
                muted: "var(--muted)",
            },
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
                heading: ["Montserrat", "sans-serif"],
            }
        },
    },
    plugins: [
        tailwindcssAnimate
    ],
}
