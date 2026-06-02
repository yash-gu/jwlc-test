/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jaipur: {
          // Core Pink City palette
          pink:        '#E8536A',   // Hawa Mahal pink
          'pink-deep': '#C93B55',   // Deep rose
          'pink-light':'#FADADD',   // Blush
          'pink-pale': '#FFF0F2',   // Petal white
          terracotta:  '#D26953',   // Sandstone terracotta
          'terracotta-deep': '#C15440',
          rose:        '#FCEBE6',
          gold:        '#D4AF37',   // Royal gold
          'gold-warm': '#E5A93C',
          saffron:     '#FF9933',   // Saffron accent
          dark:        '#2C1E1A',
          light:       '#FFF5F7',   // Pink-tinted ivory
          cream:       '#FAF0F2',
        }
      },
      fontFamily: {
        serifPremium: ['Cinzel', '"Playfair Display"', 'serif'],
        ui: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hawa-mahal-gradient': 'linear-gradient(135deg, #E8536A 0%, #C93B55 40%, #D4AF37 100%)',
        'pink-city-gradient':  'linear-gradient(135deg, #FFF0F2 0%, #FADADD 50%, #FCEBE6 100%)',
        'royal-gradient':      'linear-gradient(135deg, #C93B55 0%, #E8536A 50%, #E5A93C 100%)',
      },
      animation: {
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
