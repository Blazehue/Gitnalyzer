# Gitnalyzer - GitHub Profile Statistics Visualizer

A modern web application built with Next.js 15 that visualizes GitHub profile statistics through interactive charts and comprehensive data displays.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Overview

Gitnalyzer provides an intuitive interface for exploring GitHub user profiles, offering detailed analytics and visualizations of repository data, programming language distributions, and contribution metrics. The application leverages the GitHub REST API to deliver real-time insights with a polished, responsive user interface.

## Key Features

- **User Profile Search** - Retrieve and display comprehensive GitHub user information
- **Interactive Data Visualization** - Dynamic charts showcasing language usage and repository statistics
- **Modern UI Design** - Built with Radix UI components and Tailwind CSS for a professional aesthetic
- **Animated Interface Elements** - Subtle aurora and beam animations enhance visual engagement
- **Responsive Layout** - Optimized experience across desktop, tablet, and mobile devices
- **Performance Optimized** - Leverages Next.js 15 with Turbopack for rapid load times
- **Repository Insights** - Highlights top repositories by star count with detailed metrics
- **Comprehensive Profile Data** - Displays followers, bio, location, company affiliation, and more
- **Public API Access** - No authentication required for basic usage (60 requests/hour limit)

## Technology Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with shadcn/ui
- **Data Visualization**: Recharts
- **Animation Library**: Framer Motion
- **Data Source**: GitHub REST API v3
- **Icon Libraries**: Lucide React and Tabler Icons

## Installation Guide

### System Requirements

- Node.js 18.0 or higher
- Package manager: npm, yarn, pnpm, or bun

### Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/Blazehue/Gitnalyzer.git
cd Gitnalyzer
```

2. **Install Dependencies**
```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

3. **Start Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Access Application**
Navigate to [http://localhost:3000](http://localhost:3000) in your web browser

## Usage Instructions

1. Enter a valid GitHub username in the search field (examples: `torvalds`, `gaearon`, `vercel`)
2. Submit the search query by clicking the search button or pressing Enter
3. View the generated analytics including:
   - User profile information (avatar, biography, location, company)
   - Account statistics (repository count, followers, following)
   - Programming language distribution chart
   - Top 6 repositories ranked by stars
   - Account registration date

## Project Architecture

```
gitnalyzer/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Application root layout
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global stylesheet
│   ├── components/
│   │   ├── GitHubStatsVisualizer.tsx  # Primary application component
│   │   ├── LanguageChart.tsx          # Language distribution chart
│   │   ├── RepoCards.tsx              # Repository card grid
│   │   └── ui/                        # Reusable UI component library
│   ├── services/
│   │   └── githubService.ts    # GitHub API integration layer
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                      # Static asset directory
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Component Documentation

### GitHubStatsVisualizer
Primary application component responsible for state management and orchestrating data flow between child components.

### LanguageChart
Interactive donut chart component that visualizes the distribution of programming languages across a user's repositories.

### RepoCards
Grid-based component displaying repository cards with metrics including stars, forks, and primary language.

## Configuration

### GitHub API Rate Limits

The application interfaces with the public GitHub API under the following constraints:

- **Unauthenticated Requests**: 60 requests per hour per IP address
- **Authenticated Requests**: 5,000 requests per hour (recommended for production environments)

### GitHub Personal Access Token Setup (Recommended)

To increase API rate limits and ensure optimal performance:

1. **Generate Personal Access Token**:
   - Navigate to: https://github.com/settings/tokens
   - Create new token (classic)
   - Select `public_repo` scope (or no scopes for public data access only)
   - Copy the generated token

2. **Configure Environment Variables**:
Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
```

3. **Restart Development Server**:
```bash
npm run dev
```

The GitHub service automatically utilizes the configured token without requiring code modifications.

> For comprehensive setup instructions, refer to [RATE_LIMIT_SOLUTION.md](./RATE_LIMIT_SOLUTION.md)

## Available Scripts

```bash
npm run dev      # Launch development server with Turbopack
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Execute ESLint code analysis
```

## Deployment

### Vercel Deployment (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Blazehue/Gitnalyzer)

1. Commit and push code to GitHub repository
2. Import repository into Vercel dashboard
3. Configure environment variables if using GitHub token
4. Deploy application

### Alternative Deployment Platforms

This Next.js application is compatible with:
- Netlify
- Railway
- Render
- AWS Amplify
- Any Node.js-compatible hosting provider

## Contributing

Contributions are welcome and appreciated. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines and code standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.

## Author

**Blazehue**
- GitHub: [@Blazehue](https://github.com/Blazehue)
- Repository: [Gitnalyzer](https://github.com/Blazehue/Gitnalyzer)

## Acknowledgments

- [Next.js](https://nextjs.org/) - React-based web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [shadcn/ui](https://ui.shadcn.com/) - Component library built on Radix UI
- [GitHub API](https://docs.github.com/en/rest) - Data provider

---

**Maintained by Blazehue** | If you find this project valuable, please consider starring the repository.
