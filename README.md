# 🚀 Gitnalyzer - GitHub Profile Stats Visualizer

A beautiful, modern web application built with **Next.js 15** that visualizes GitHub profile statistics with stunning UI components and interactive charts.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🔍 **Search GitHub Users** - Enter any GitHub username to fetch their profile
- 📊 **Interactive Charts** - Visualize language usage with beautiful charts
- 🎨 **Beautiful UI** - Modern design with Radix UI components and Tailwind CSS
- 🌈 **Animated Backgrounds** - Aurora and beam animations for visual appeal
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🎯 **Top Repositories** - View user's most starred repositories
- 👤 **Profile Information** - Display follower count, bio, location, and more
- 🚫 **No Authentication Required** - Uses public GitHub API (60 requests/hour)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **API**: GitHub REST API v3
- **Icons**: Lucide React & Tabler Icons

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Blazehue/Gitnalyzer.git
cd Gitnalyzer
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

1. Enter a GitHub username in the search box (e.g., `torvalds`, `gaearon`, `vercel`)
2. Click **Search** or press Enter
3. View the user's:
   - Profile information (avatar, bio, location, company)
   - Statistics (repositories, followers, following)
   - Language breakdown chart
   - Top 6 most starred repositories
   - Account creation date

## 📁 Project Structure

```
gitnalyzer/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── GitHubStatsVisualizer.tsx  # Main component
│   │   ├── LanguageChart.tsx          # Language chart component
│   │   ├── RepoCards.tsx              # Repository cards
│   │   └── ui/                        # Reusable UI components
│   ├── services/
│   │   └── githubService.ts    # GitHub API integration
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Components

### GitHubStatsVisualizer
Main component that orchestrates the entire application flow.

### LanguageChart
Interactive donut chart showing programming language distribution.

### RepoCards
Grid display of top repositories with stars, forks, and language info.

## 🔧 Configuration

### GitHub API Rate Limits

The application uses the public GitHub API:
- **Without Token**: 60 requests per hour per IP address
- **With Token**: 5,000 requests per hour (recommended for production)

### ⚠️ Important: Add GitHub Token (Recommended)

To avoid rate limit issues:

1. **Create a GitHub Personal Access Token**:
   - Visit: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select `public_repo` scope (or no scopes for public data only)
   - Copy the token

2. **Create a `.env.local` file** in the project root:
```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
```

3. **Restart the development server**:
```bash
npm run dev
```

The token is automatically used by the GitHub service - no code changes needed!

> 📖 For detailed instructions, see [RATE_LIMIT_SOLUTION.md](./RATE_LIMIT_SOLUTION.md)

## 📝 Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Blazehue/Gitnalyzer)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with one click!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify
- Any Node.js hosting service

## 🤝 Contributing

Contributions are welcome! Please check out the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Blazehue**
- GitHub: [@Blazehue](https://github.com/Blazehue)
- Project: [Gitnalyzer](https://github.com/Blazehue/Gitnalyzer)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [GitHub API](https://docs.github.com/en/rest) - For providing the data



Made with ❤️ by Blazehue | ⭐ Star this repo if you find it useful!
