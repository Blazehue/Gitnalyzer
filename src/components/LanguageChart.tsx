"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { LanguageStats } from '@/services/githubService';

ChartJS.register(ArcElement, Tooltip, Legend);

interface LanguageChartProps {
  languageStats: LanguageStats;
}

const LANGUAGE_COLORS: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Vue: '#41b883',
  Jupyter: '#DA5B0B',
};

export default function LanguageChart({ languageStats }: LanguageChartProps) {
  const labels = Object.keys(languageStats);
  const values = Object.values(languageStats);

  const backgroundColors = labels.map(
    (lang) => LANGUAGE_COLORS[lang] || `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Repositories',
        data: values,
        backgroundColor: backgroundColors,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'hsl(var(--foreground))',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'hsl(var(--popover))',
        titleColor: 'hsl(var(--popover-foreground))',
        bodyColor: 'hsl(var(--popover-foreground))',
        borderColor: 'hsl(var(--border))',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} repos (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Pie data={data} options={options} />
    </div>
  );
}