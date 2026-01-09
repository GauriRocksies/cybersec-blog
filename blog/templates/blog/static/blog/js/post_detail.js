tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1876f2",
                "background-light": "#f0f2f5",
                "background-dark": "#18191a",
                "card-light": "#ffffff",
                "card-dark": "#242526",
                "text-primary-light": "#050505",
                "text-primary-dark": "#e4e6eb",
                "text-secondary-light": "#65676b",
                "text-secondary-dark": "#b0b3b8",
                "divider-light": "#ced0d4",
                "divider-dark": "#3e4042",
                "input-light": "#f0f2f5",
                "input-dark": "#3a3b3c",
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },
        },
    },
};
