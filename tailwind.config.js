/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                background: "var(--bg)",
                card: "var(--card)",
                text: "var(--text)",
                muted: "var(--muted)",
            },
        },
    },
    plugins: [],
}
