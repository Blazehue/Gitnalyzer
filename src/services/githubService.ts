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

  async fetchUser(username: string): Promise<GitHubUser> {
    const response = await fetch(`${this.baseUrl}/users/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      throw new Error('Failed to fetch user data');
    }
    
    return response.json();
  }

  async fetchRepositories(username: string): Promise<Repository[]> {
    const response = await fetch(
      `${this.baseUrl}/users/${username}/repos?sort=updated&per_page=100`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    return response.json();
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