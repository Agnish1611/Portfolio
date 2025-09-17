/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pangaia': ['PPPangaia', 'sans-serif'],
        'pangaia-bold': ['PPPangaia-Bold', 'sans-serif'],
        'pangaia-medium': ['PPPangaia-Medium', 'sans-serif'],
        'pangaia-ultralight': ['PPPangaia-Ultralight', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'jetbrains': ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'merienda': ['var(--font-merienda)', 'cursive'],
      },
    },
  },
  plugins: [],
}
