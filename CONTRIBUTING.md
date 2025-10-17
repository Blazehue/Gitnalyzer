# Contributing to Gitnalyzer

First off, thank you for considering contributing to Gitnalyzer! It's people like you that make this tool better for everyone.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct of being respectful and constructive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages** following our conventions
6. **Submit a pull request** with a clear description

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Gitnalyzer.git
cd Gitnalyzer

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid using `any` type when possible

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Use meaningful component and variable names
- Extract reusable logic into custom hooks

### Styling

- Use Tailwind CSS utility classes
- Follow the existing styling patterns
- Ensure responsive design for all screen sizes
- Test on multiple browsers

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add comments for complex logic
- Keep functions small and focused

## Commit Message Guidelines

We follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(chart): Add language distribution pie chart

Add interactive pie chart showing programming languages used
across all repositories with percentage breakdown.

Closes #123
```

```
fix(api): Handle rate limit errors gracefully

Add proper error handling for GitHub API rate limit responses
and display user-friendly message.

Fixes #456
```

## File Structure

```
gitnalyzer/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── services/         # API services
│   ├── lib/             # Utilities
│   └── hooks/           # Custom hooks
├── public/              # Static assets
└── tests/               # Test files
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good code coverage
- Test edge cases and error scenarios

## Documentation

- Update README.md if adding new features
- Add JSDoc comments for complex functions
- Update API documentation if changing endpoints
- Include code examples where helpful

## Questions?

Feel free to open an issue with the `question` label if you need help or clarification.

## Recognition

Contributors will be recognized in our README.md file and release notes.

Thank you for contributing to Gitnalyzer! 🚀
