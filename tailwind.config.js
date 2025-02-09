tailwind.config = {
    theme: {
        extend: {
            textShadow: {
                glow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #e90ed7, 0 0 80px #e90ed7, 0 0 90px #e90ed7, 0 0 100px #e90ed7, 0 0 150px #e90ed7',
            },
            animation: {
                heartbeat: 'heartbeat 1.5s ease-in-out infinite',
            },
            keyframes: {
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
            },
            fontFamily: {
                comic: ["Comic Neue", "cursive"], // Add the font here
            },
        },
    },
};