tailwind.config = {
    theme: {
        extend: {
            animation: {
                blink: 'blink 1s steps(2, start) infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { 'border-color': 'transparent' },
                    '50%': { 'border-color': 'rgb(249 115 22)' }, // Tailwind's orange-500
                },
            },
        },
    },
};