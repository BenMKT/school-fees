# School Fees Management System

A comprehensive platform for managing school fees, student performance, and academic tracking.

## Features

- Student Registration System
- Parent Portal
- School Administration Dashboard
- Fee Management
- Academic Performance Tracking
- School Budget Management
- AI-Powered Academic Advice
- Payment Tracking and Analytics

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Sheets API (for data storage)
- V0.dev (for UI components)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/school-fees-app.git
cd school-fees-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY=your_api_key
GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
school-fees-app/
├── app/                    # Next.js app directory
├── components/            # Reusable components
├── database/             # Database schema and migrations
├── lib/                  # Utility functions and API clients
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@schoolfeesapp.com or open an issue in the repository.
