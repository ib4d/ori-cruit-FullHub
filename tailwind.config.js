/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#ECE9E4",
          soft: "#F3F0EB",
          panel: "#E7E2DC",
          paper: "#F7F4EF",
        },
        ink: {
          primary: "#0A0A0A",
          secondary: "#3B3835",
          muted: "#6F6A65",
          inverse: "#F5F2ED",
        },
        line: {
          hair: "#C9C2BB",
          soft: "#D8D1CA",
          strong: "#0A0A0A",
        },
        accent: {
          blush: "#F3C9D7",
          rose: "#E7B6C7",
          lime: "#DDE8B7",
          beige: "#E5D3C1",
          mist: "#EDE7E1",
        },
        state: {
          success: "#C8D7AE",
          warning: "#E7D6A8",
          error: "#D8B4B4",
          info: "#D7D1EA",
        },
        surface: {
          black: "#050505",
        }
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        ui: ["Inter", "sans-serif"],
        tech: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        'display-hero': ['112px', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-section': ['88px', { lineHeight: '0.92', letterSpacing: '-0.01em' }],
        'display-block': ['64px', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-metric': ['72px', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'h1': ['56px', { lineHeight: '1.0' }],
        'h2': ['40px', { lineHeight: '1.02' }],
        'h3': ['28px', { lineHeight: '1.08' }],
        'h4': ['22px', { lineHeight: '1.1' }],
        'ui-lg': ['18px', { lineHeight: '1.35' }],
        'ui-md': ['16px', { lineHeight: '1.4' }],
        'ui-sm': ['14px', { lineHeight: '1.4' }],
        'ui-xs': ['12px', { lineHeight: '1.35' }],
        'ui-meta': ['11px', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '120': '120px',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'inout': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        'fast': '180ms',
        'base': '280ms',
        'slow': '520ms',
        'hero': '900ms',
      },
      backgroundImage: {
        'grad-a': 'radial-gradient(circle at top left, var(--tw-gradient-stops))',
        'grad-b': 'radial-gradient(circle at bottom right, var(--tw-gradient-stops))',
        'grad-c': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
