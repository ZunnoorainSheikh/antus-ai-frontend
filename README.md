# MedTech Phase Simulator - Next.js Frontend

A medical image processing application built with Next.js that simulates arterial and venous phases in medical imaging.

## Features

- 🖼️ Medical image upload with drag & drop support
- 🧠 AI-powered phase simulation (arterial and venous)
- 📊 Side-by-side comparison of original and processed images
- 💾 Download processed images
- 📱 Responsive design with Tailwind CSS
- 🔔 Toast notifications for user feedback

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Notifications**: Sonner
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ZunnoorainSheikh/antus-ai-frontend.git
cd antus-ai-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

For static export:
```bash
npm run export
```

### Deployment

The app is configured for static export and can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

For GitHub Pages deployment:
```bash
npm run deploy
```

## Project Structure

```
├── components/          # React components
│   ├── UploadForm.jsx  # File upload and processing form
│   └── ImageDisplay.jsx # Image comparison and display
├── pages/              # Next.js pages
│   ├── _app.js        # App component
│   └── index.js       # Home page
├── public/            # Static assets
├── services/          # Utility services
│   └── alertService.js # Toast notification service
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS
└── next.config.js     # Next.js configuration
```

## Configuration

### Backend Integration

Update the backend URL in `.env.local`:
```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

### Styling

The app uses Tailwind CSS with custom medical theme colors defined in `tailwind.config.js`.

## Features in Detail

### Image Upload
- Supports JPG, PNG formats
- Maximum file size: 10MB
- Drag & drop interface
- File validation

### Phase Processing
- Arterial phase simulation
- Venous phase simulation
- Real-time processing feedback

### Image Display
- Side-by-side comparison
- Download capabilities
- Responsive layout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please create an issue in the GitHub repository.