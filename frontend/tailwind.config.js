/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Custom DelhiAir.AI Colors
  			'fresh-green': '#27AE60',
  			'tech-blue': '#2F80ED',
  			'warning-orange': '#F2994A',
  			'danger-red': '#EB5757',
  			'dark-charcoal': '#1C1C1C',
  			'dark-gunmetal': '#2C2C2C',
  			'light-gray': '#F2F2F2',
  			'pure-white': '#FFFFFF',
  			'aqua-teal': '#00C9A7',
  			'saffron': '#FF9933',
  			'india-green': '#138808'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'tri-color-pulse': {
  				'0%, 100%': {
  					'border-color': '#FF9933'
  				},
  				'33%': {
  					'border-color': '#FFFFFF'
  				},
  				'66%': {
  					'border-color': '#138808'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'tri-color-pulse': 'tri-color-pulse 3s ease-in-out infinite',
  			'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
  		},
  		boxShadow: {
  			'glow-tricolor': '0 0 20px rgba(255, 153, 51, 0.3), 0 0 40px rgba(255, 255, 255, 0.1), 0 0 60px rgba(19, 136, 8, 0.1)',
  			'glow-saffron': '0 0 20px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.2)',
  			'glow-green': '0 0 20px rgba(19, 136, 8, 0.4), 0 0 40px rgba(19, 136, 8, 0.2)',
  			'glow-white': '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)',
  			'3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)'
  		},
  		backdropBlur: {
  			'3xl': '64px',
  			'4xl': '128px'
  		},
  		backdropSaturate: {
  			'150': '1.5',
  			'200': '2'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};