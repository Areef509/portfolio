import { Repository } from '../types';

export const leetcodeStats = {
  totalSolved: 300,
  targetSolved: '300+',
  categories: [
    { name: 'Data Structures & Arrays', solved: 110, percentage: 37, color: 'bg-blue-500' },
    { name: 'Dynamic Programming & Recursion', solved: 65, percentage: 22, color: 'bg-indigo-500' },
    { name: 'Graphs & Tree Traversals', solved: 55, percentage: 18, color: 'bg-cyan-500' },
    { name: 'Two Pointers & Sliding Window', solved: 45, percentage: 15, color: 'bg-teal-500' },
    { name: 'Greedy & Bit Manipulation', solved: 25, percentage: 8, color: 'bg-sky-500' },
  ],
  highlights: [
    { label: 'Total Problems Solved', value: '300+' },
    { label: 'Core Focus', value: 'DSA & Algorithms' },
    { label: 'Language', value: 'Python / C++' },
    { label: 'Consistency', value: 'Active Daily Solver' },
  ],
  profileUrl: 'https://leetcode.com',
};

export const githubRepositories: Repository[] = [
  {
    name: 'smart-health-ai-platform',
    description: 'AI-powered clinical triage & vital telemetry streaming platform utilizing Groq LPU + Llama 3.3 and React frontend.',
    language: 'Python / React',
    stars: 18,
    forks: 4,
    url: 'https://github.com/areef67890/smart-health-ai-platform',
    topics: ['genai', 'llama-3.3', 'groq', 'healthcare', 'react', 'flask'],
    updatedAt: '2025',
  },
  {
    name: 'anfc-autonomous-fault-correction',
    description: 'Autonomous self-healing infrastructure agent detecting kernel anomalies in real-time with PyTorch sequence models.',
    language: 'Python',
    stars: 24,
    forks: 6,
    url: 'https://github.com/areef67890/anfc-autonomous-fault-correction',
    topics: ['aiops', 'pytorch', 'anomaly-detection', 'websockets', 'systems'],
    updatedAt: '2025',
  },
  {
    name: 'hierarchical-rag-optimizer',
    description: 'Two-stage semantic retrieval engine combining hybrid BM25 + FAISS vector search with Reciprocal Rank Fusion.',
    language: 'Python',
    stars: 31,
    forks: 7,
    url: 'https://github.com/areef67890/hierarchical-rag-optimizer',
    topics: ['rag', 'langchain', 'faiss', 'semantic-search', 'llm'],
    updatedAt: '2025',
  },
  {
    name: 'hdfs-log-anomaly-detection',
    description: 'Distributed log parsing using Drain algorithm and ensemble XGBoost + Isolation Forest classification for HDFS.',
    language: 'Python / PySpark',
    stars: 15,
    forks: 3,
    url: 'https://github.com/areef67890/hdfs-log-anomaly-detection',
    topics: ['big-data', 'pyspark', 'xgboost', 'isolation-forest', 'security'],
    updatedAt: '2024',
  },
];

export const githubActivity = {
  username: 'areef67890',
  profileUrl: 'https://github.com/areef67890',
  totalContributions: '740+ commits in the past year',
  primaryLanguages: [
    { name: 'Python', percent: 62, color: '#3572A5' },
    { name: 'TypeScript / JavaScript', percent: 24, color: '#3178C6' },
    { name: 'C++ / SQL / Shell', percent: 14, color: '#F34B7D' },
  ],
};
