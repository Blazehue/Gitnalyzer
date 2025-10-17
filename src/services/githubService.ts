export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  created_at: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  open_issues_count: number;
}

export interface LanguageStats {
  [key: string]: number;
}

class GitHubService {
  private baseUrl = 'https://api.github.com';

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };

    // Add token if available
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    return headers;
  }

  async fetchUser(username: string): Promise<GitHubUser> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${username}`, {
        headers: this.getHeaders(),
        cache: 'no-store',
      });
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found. Please check the username and try again.');
        }
        if (response.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`Failed to fetch user data: ${response.statusText}`);
      }
      
      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error. Please check your connection and try again.');
    }
  }

  async fetchRepositories(username: string): Promise<Repository[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${username}/repos?sort=updated&per_page=100`,
        {
          headers: this.getHeaders(),
          cache: 'no-store',
        }
      );
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`Failed to fetch repositories: ${response.statusText}`);
      }
      
      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error. Please check your connection and try again.');
    }
  }

  async fetchLanguageStats(username: string): Promise<LanguageStats> {
    const repos = await this.fetchRepositories(username);
    const languageStats: LanguageStats = {};

    // Aggregate language usage across all repos
    for (const repo of repos) {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    }

    return languageStats;
  }

  async fetchContributionData(username: string): Promise<number> {
    // GitHub doesn't provide contribution data via public API
    // We'll use repos count as a proxy for activity
    const repos = await this.fetchRepositories(username);
    return repos.length;
  }

  getTopRepositories(repos: Repository[], count: number = 6): Repository[] {
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, count);
  }
}

export const githubService = new GitHubService();