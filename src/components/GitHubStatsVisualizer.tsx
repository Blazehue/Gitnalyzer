"use client";

import { useState } from 'react';
import { githubService, GitHubUser, Repository, LanguageStats } from '@/services/githubService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import LanguageChart from './LanguageChart';
import RepoCards from './RepoCards';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Search, MapPin, Link as LinkIcon, Building, Calendar, Users, GitFork, BookOpen, AlertCircle } from 'lucide-react';

export default function GitHubStatsVisualizer() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [languageStats, setLanguageStats] = useState<LanguageStats>({});

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError('');
    setUser(null);
    setRepositories([]);
    setLanguageStats({});

    try {
      const [userData, repos, langStats] = await Promise.all([
        githubService.fetchUser(username),
        githubService.fetchRepositories(username),
        githubService.fetchLanguageStats(username),
      ]);

      setUser(userData);
      setRepositories(repos);
      setLanguageStats(langStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const topRepos = repositories.length > 0 ? githubService.getTopRepositories(repositories) : [];

  return (
    <div className="w-full min-h-screen relative py-8 px-4">
      <AuroraBackground />
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            GitHub Profile Stats Visualizer
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore GitHub profiles with beautiful visualizations
          </p>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Search GitHub User</CardTitle>
            <CardDescription>Enter a GitHub username to view their profile statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="e.g., torvalds, gaearon, vercel"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                <Search className="w-4 h-4 mr-2" />
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </form>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <Skeleton className="w-24 h-24 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-full max-w-md" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* User Profile */}
        {user && !loading && (
          <div className="space-y-6">
            {/* Profile Overview */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src={user.avatar_url} alt={user.name || user.login} />
                    <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="text-3xl font-bold">{user.name || user.login}</h2>
                      <p className="text-muted-foreground">@{user.login}</p>
                    </div>
                    {user.bio && <p className="text-foreground/90">{user.bio}</p>}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {user.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {user.location}
                        </div>
                      )}
                      {user.company && (
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {user.company}
                        </div>
                      )}
                      {user.blog && (
                        <a
                          href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary"
                        >
                          <LinkIcon className="w-4 h-4" />
                          {user.blog}
                        </a>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {formatDate(user.created_at)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Public Repositories</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.public_repos}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Total public repos
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Followers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.followers}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    People following
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Following</CardTitle>
                  <GitFork className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.following}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    People they follow
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Language Breakdown */}
            {Object.keys(languageStats).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Language Breakdown</CardTitle>
                  <CardDescription>
                    Distribution of programming languages across repositories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <LanguageChart languageStats={languageStats} />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Top Repositories */}
            {topRepos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Top Repositories</CardTitle>
                  <CardDescription>
                    Most starred repositories (showing top {topRepos.length})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RepoCards repositories={topRepos} />
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}