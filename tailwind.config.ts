
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// CODJAM Brand Colors
				'codjam-orange': {
					50: '#FFF3E8',
					100: '#FFE6D1',
					200: '#FFCC9E',
					300: '#FFB370',
					400: '#FF9A42',
					500: '#E67E22', // Primary orange from logo
					600: '#D86B14',
					700: '#C65A0D',
					800: '#B44906',
					900: '#A23800'
				},
				'codjam-teal': {
					50: '#E8F9FB',
					100: '#D1F3F7',
					200: '#A3E7EF',
					300: '#75DBE7',
					400: '#47CFDF',
					500: '#17A2B8', // Primary teal from logo
					600: '#1591A6',
					700: '#128094',
					800: '#0F6F82',
					900: '#0D5E70'
				},
				'codjam-navy': {
					50: '#F4F6F8',
					100: '#E9EDF1',
					200: '#D3DBE3',
					300: '#BDC9D5',
					400: '#A7B7C7',
					500: '#2C3E50', // Primary navy from logo
					600: '#253648',
					700: '#1E2E40',
					800: '#172638',
					900: '#101E30'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(23, 162, 184, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(23, 162, 184, 0.6), 0 0 30px rgba(23, 162, 184, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'codjam-gradient': 'linear-gradient(135deg, #E67E22 0%, #17A2B8 50%, #2C3E50 100%)',
				'codjam-subtle': 'linear-gradient(135deg, #FFF3E8 0%, #E8F9FB 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
