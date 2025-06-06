# Modern Portfolio Website

A clean, responsive portfolio website built with React, Tailwind CSS, and Framer Motion to showcase your web development projects including the AnimeNexus case study.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎬 Smooth animations with Framer Motion
- 📄 Detailed project case studies
- 🎨 Styled with Tailwind CSS for easy customization

## Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   └── projects/  # Add your project images here
│   ├── fonts/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── ui/           # UI components
│   │   └── projects/     # Project-specific components
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── projects.js   # Project data including AnimeNexus case study
│   ├── styles/
│   │   └── index.css     # Main CSS file with Tailwind
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component with routes
│   └── main.jsx          # Entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

- Update your personal information in various components
- Replace placeholder images with your own photos

### Project Case Studies

- Edit or add projects in `src/data/projects.js`
- Add project images to `public/images/projects/`

### Styling

- The site uses Tailwind CSS - customize colors, fonts, etc. in `tailwind.config.js`
- Global styles are in `src/styles/index.css`

## Deployment

1. Build the project
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The build output will be in the `dist` directory, which you can deploy to any static site hosting service like:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## License

This project is open source and available under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)