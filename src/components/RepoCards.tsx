"use client";

import { Repository } from '@/services/githubService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, AlertCircle } from 'lucide-react';

interface RepoCardsProps {
  repositories: Repository[];
}

export default function RepoCards({ repositories }: RepoCardsProps) {
  if (repositories.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No repositories found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repositories.map((repo) => (
        <Card key={repo.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {repo.name}
              </a>
            </CardTitle>
            <CardDescription className="line-clamp-2 min-h-[2.5rem]">
              {repo.description || 'No description available'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="flex flex-wrap gap-2 mb-3">
              {repo.language && (
                <Badge variant="secondary" className="text-xs">
                  {repo.language}
                </Badge>
              )}
              {repo.topics?.slice(0, 2).map((topic) => (
                <Badge key={topic} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span>{repo.forks_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                <span>{repo.open_issues_count}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}