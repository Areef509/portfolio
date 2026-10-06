import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'smart-health-ai',
    number: '01',
    title: 'SMART HEALTH AI',
    tagline: 'AI-Powered Public Healthcare Monitoring & Triage Platform',
    category: 'GenAI & Public Health Systems',
    year: '2025',
    featured: true,
    technologies: ['React.js', 'Flask', 'Firebase', 'Groq Cloud', 'Llama 3.3', 'WebSockets', 'Tailwind CSS'],
    githubUrl: 'https://github.com/areef67890',
    liveUrl: '#',
    stats: [
      { label: 'Inference Latency', value: '< 380ms' },
      { label: 'Triage Agreement', value: '94.2%' },
      { label: 'LLM Backbone', value: 'Llama 3.3 70B' },
      { label: 'Architecture', value: 'Streaming RAG' },
    ],
    overview: {
      problem:
        'Public primary healthcare facilities and rural clinics face severe diagnostic backlogs, manual patient triage delays, and unstandardized symptom recording, leading to critical treatment delays during peak inflow.',
      solution:
        'Engineered an ultra-low-latency clinical triage and patient telemetry monitoring platform. Leveraged Groq LPU inference with Llama 3.3 70B to parse multimodal patient symptoms in real-time, generate structured urgency classifications (Emergency, Urgent, Routine), and stream diagnostic recommendations to attending medical staff.',
      impact:
        'Demonstrated sub-400ms end-to-end token response times, automated structured intake summaries, and reduced preliminary triage processing overhead by over 60% in simulated clinical testing.',
    },
    architecture: {
      summary:
        'A micro-service pipeline connecting a reactive patient/clinician frontend with a high-throughput Flask inference gateway, Groq LPUs, and real-time Firebase telemetry synchronizers.',
      steps: [
        {
          title: '01. Telemetry & Symptom Ingestion',
          desc: 'Patient intake forms, vital signs (SpO2, Pulse, BP), and conversational symptom complaints are captured via a resilient React web interface.',
          tech: 'React 18 + WebSockets',
        },
        {
          title: '02. Context Framing & Sanitization',
          desc: 'Flask backend sanitizes clinical notes, injects medical boundary guidelines, and constructs structured few-shot system prompts.',
          tech: 'Flask + Python 3.12',
        },
        {
          title: '03. Ultra-Fast LPU Inference',
          desc: 'Groq Cloud LPU executes Llama 3.3 70B inference at 300+ tokens/sec, extracting clinical risk entities and triage scores.',
          tech: 'Groq API + Llama 3.3 70B',
        },
        {
          title: '04. Real-Time Telemetry & Dispatch',
          desc: 'Encrypted triage results, alert triggers, and structured vitals stream directly to the hospital ward dashboard in real-time.',
          tech: 'Firebase Realtime DB + Cloud Firestore',
        },
      ],
    },
    mlWorkflow: {
      title: 'Clinical Natural Language & Triage Decision Engine',
      description:
        'The core AI engine applies prompt-engineered medical reasoning chains with structured JSON schema outputs to eliminate hallucination risks in clinical assessments.',
      components: [
        'Deterministic JSON-Schema constrained decoding for medical parameters',
        'Multi-vital anomaly score cross-referencing with clinical threshold guidelines',
        'Streaming token response via Server-Sent Events (SSE) for zero clinician wait-time',
        'Differential diagnosis recommendation with confidence and contraindication alerts',
      ],
      metrics: [
        { name: 'Triage Classification F1-Score', score: '0.941' },
        { name: 'Average Time to First Token', score: '195ms' },
        { name: 'JSON Schema Validation Accuracy', score: '99.9%' },
        { name: 'Concurrent Stream Throughput', score: '120 req/s' },
      ],
    },
    visualTheme: {
      accentGradient: 'from-blue-600 to-cyan-500',
      primaryBadge: 'Healthcare GenAI',
    },
  },
  {
    id: 'anfc-neural-fault-correction',
    number: '02',
    title: 'ANFC — NEURAL FAULT CORRECTION',
    tagline: 'Autonomous AI Self-Healing Infrastructure & Neural Anomaly Recovery',
    category: 'AIOps & Deep Learning Systems',
    year: '2025',
    featured: true,
    technologies: ['Python', 'PyTorch', 'React.js', 'WebSockets', 'psutil', 'FastAPI', 'Chart.js'],
    githubUrl: 'https://github.com/areef67890',
    liveUrl: '#',
    stats: [
      { label: 'Fault Detection Time', value: '< 120ms' },
      { label: 'Self-Healing Rate', value: '88.4%' },
      { label: 'Telemetry Ingestion', value: '100 Hz' },
      { label: 'Downtime Reduction', value: '74%' },
    ],
    overview: {
      problem:
        'Distributed cloud infrastructure and microservice fleets frequently experience silent memory leaks, rogue thread contention, and deadlock cascades that cause major outages before human Site Reliability Engineers (SREs) can detect and remediate.',
      solution:
        'Built ANFC (Autonomous Neural Fault Correction), an intelligent autonomous observability agent. ANFC continuously ingests sub-second hardware and OS telemetry (CPU, RAM, I/O wait, socket states), applies neural anomaly classification models, and triggers dynamic self-healing remediation routines (thread throttling, cache flushing, automatic micro-container restart).',
      impact:
        'Achieved sub-120ms anomaly detection with an 88.4% autonomous recovery rate in stress-tested synthetic microservice clusters without requiring manual SRE intervention.',
    },
    architecture: {
      summary:
        'An event-driven telemetry monitoring and autonomous neural healing loop operating across host OS daemons, PyTorch inference kernels, and real-time visualization sockets.',
      steps: [
        {
          title: '01. Sub-Second Telemetry Ingestion',
          desc: 'Lightweight background daemons poll OS process tables, memory page faults, and socket backlogs at 100Hz intervals.',
          tech: 'Python + psutil + C-bindings',
        },
        {
          title: '02. Neural Anomaly Classification',
          desc: 'Sliding window sequence model evaluates multi-variate telemetry vectors to detect anomalous state transitions before crashes.',
          tech: 'PyTorch + Temporal ConvNet',
        },
        {
          title: '03. Policy Decision Engine',
          desc: 'Rule-augmented reinforcement policy ranks remediation actions based on risk impact and historical recovery success.',
          tech: 'Custom Python Decision Engine',
        },
        {
          title: '04. Autonomous Remediation & Observability',
          desc: 'Executes targeted OS-level healing (process isolation, dynamic memory compression, socket recycling) and broadcasts live telemetry.',
          tech: 'WebSockets + React Realtime Graph',
        },
      ],
    },
    mlWorkflow: {
      title: 'Predictive Anomaly Detection & Policy Action Pipeline',
      description:
        'Combines temporal sequence modeling with adaptive heuristic policy trees to deliver deterministic, fail-safe infrastructure auto-healing.',
      components: [
        'Multivariate time-series normalization and sliding window tokenization',
        'Lightweight PyTorch neural classifier with sub-10ms inference overhead',
        'State-machine safety lock preventing circular remediation loops',
        'WebSocket telemetry streaming to low-latency React observability canvas',
      ],
      metrics: [
        { name: 'Anomaly Detection Accuracy', score: '97.8%' },
        { name: 'Remediation Decision Latency', score: '38ms' },
        { name: 'False Positive Intervention Rate', score: '< 1.8%' },
        { name: 'System CPU Overhead', score: '< 2.1%' },
      ],
    },
    visualTheme: {
      accentGradient: 'from-blue-600 to-indigo-600',
      primaryBadge: 'AIOps & Autonomous AI',
    },
  },
  {
    id: 'rag-knowledge-base-optimization',
    number: '03',
    title: 'RAG KNOWLEDGE OPTIMIZATION',
    tagline: 'Enterprise-Grade Semantic Retrieval & Context Augmentation Pipeline',
    category: 'LLM Systems & Semantic Search',
    year: '2025',
    featured: true,
    technologies: ['Python', 'LangChain', 'FAISS', 'ChromaDB', 'OpenAI API', 'FastAPI', 'BM25'],
    githubUrl: 'https://github.com/areef67890',
    liveUrl: '#',
    stats: [
      { label: 'Corpus Indexed', value: '850+ Articles' },
      { label: 'Hallucination Drop', value: '-42%' },
      { label: 'Search Speedup', value: '3.2x' },
      { label: 'Retrieval Strategy', value: 'Hybrid RRF' },
    ],
    overview: {
      problem:
        'Standard Retrieval-Augmented Generation (RAG) models suffer from semantic drift, high hallucination rates, lost-in-the-middle context degradation, and high query latency when searching across 850+ complex technical documentation articles.',
      solution:
        'Designed an optimized hierarchical RAG pipeline combining parent-child document chunking, hybrid keyword (BM25) and dense vector embeddings (FAISS/Chroma), Reciprocal Rank Fusion (RRF) reranking, and contextual compression before LLM synthesis.',
      impact:
        'Achieved a 42% decrease in hallucination rates on technical QA benchmarks, boosted relevant context recall by 68%, and maintained sub-second total response times across 850+ dense articles.',
    },
    architecture: {
      summary:
        'A high-performance two-stage retrieval and contextual reranking engine feeding prompt-compressed contexts to generative models.',
      steps: [
        {
          title: '01. Hierarchical Parent Chunking',
          desc: 'Documents split into fine-grained 128-token search chunks while preserving 1024-token parent context references.',
          tech: 'LangChain TextSplitters',
        },
        {
          title: '02. Hybrid Dual-Index Search',
          desc: 'Simultaneously queries sparse lexical index (BM25) for exact keyword/code matches and dense vector index for semantic meaning.',
          tech: 'FAISS + RankBM25',
        },
        {
          title: '03. Reciprocal Rank Fusion (RRF)',
          desc: 'Merges and normalizes candidate document scores, followed by cross-encoder neural reranking to prioritize top-k contexts.',
          tech: 'Python + Cross-Encoder Reranker',
        },
        {
          title: '04. Context Compression & Streaming',
          desc: 'Strips irrelevant fluff tokens to maximize prompt signal-to-noise ratio before passing context to LLM for final generation.',
          tech: 'FastAPI + SSE Streaming',
        },
      ],
    },
    mlWorkflow: {
      title: 'Contextual Reranking & Retrieval Optimization Architecture',
      description:
        'Eliminates naive vector search weaknesses by combining dense semantic clustering with sparse lexical precision and intelligent token pruning.',
      components: [
        'Dense vector embeddings with dimensionality normalization',
        'Parent Document Retriever preserving holistic context windows',
        'Reciprocal Rank Fusion (RRF) scoring algorithm (k=60)',
        'Extractive contextual summarization reducing LLM token consumption by 38%',
      ],
      metrics: [
        { name: 'Context Recall @ 5', score: '96.2%' },
        { name: 'Precision @ 3', score: '92.8%' },
        { name: 'Context Token Savings', score: '38.4%' },
        { name: 'Median Query Latency', score: '420ms' },
      ],
    },
    visualTheme: {
      accentGradient: 'from-blue-500 to-teal-400',
      primaryBadge: 'LLMs & RAG Pipelines',
    },
  },
  {
    id: 'hdfs-network-anomaly-detection',
    number: '04',
    title: 'HDFS ANOMALY DETECTION',
    tagline: 'Large-Scale Distributed Log Processing & ML-Based Threat Detection',
    category: 'Big Data ML & Cybersecurity',
    year: '2024',
    featured: true,
    technologies: ['PySpark', 'Scikit-Learn', 'XGBoost', 'Isolation Forest', 'Python', 'Pandas'],
    githubUrl: 'https://github.com/areef67890',
    liveUrl: '#',
    stats: [
      { label: 'Detection Accuracy', value: '99.4%' },
      { label: 'ROC-AUC Score', value: '0.982' },
      { label: 'Log Throughput', value: '100K+ logs/s' },
      { label: 'False Alarm Rate', value: '0.6%' },
    ],
    overview: {
      problem:
        'Hadoop Distributed File System (HDFS) clusters generate millions of unstructured syslog messages daily. Detecting unauthorized block mutations, data exfiltration, and network anomalies among terabytes of routine logs using manual rules is nearly impossible.',
      solution:
        'Developed an end-to-end distributed machine learning pipeline for automated HDFS log parsing, session-level feature extraction, and ensemble anomaly classification using Isolation Forest for unsupervised outlier identification paired with XGBoost for known threat signatures.',
      impact:
        'Demonstrated 99.4% detection accuracy on standard benchmark log datasets with a 0.982 ROC-AUC, scaling to process 100,000+ log lines per second with sub-1% false positive rates.',
    },
    architecture: {
      summary:
        'A high-throughput distributed log parsing and machine learning pipeline capable of parsing raw semi-structured server logs into feature vectors.',
      steps: [
        {
          title: '01. Distributed Log Ingestion & Parsing',
          desc: 'Uses regex-based Drain parsing algorithm to convert unstructured syslog entries into structured event templates and parameters.',
          tech: 'PySpark + LogParser',
        },
        {
          title: '02. Block Session Aggregation',
          desc: 'Groups sequential events by HDFS block ID into sliding temporal windows to capture behavioral execution patterns.',
          tech: 'PySpark DataFrame API',
        },
        {
          title: '03. TF-IDF & Structural Feature Extraction',
          desc: 'Computes event frequency vectors, transition probability matrices, and duration anomaly indicators per session.',
          tech: 'Scikit-Learn + NumPy',
        },
        {
          title: '04. Ensemble Anomaly Classification',
          desc: 'Evaluates block sequences using an ensemble of Isolation Forest (unsupervised novel anomaly) and XGBoost (pattern matching).',
          tech: 'XGBoost + IsolationForest',
        },
      ],
    },
    mlWorkflow: {
      title: 'Distributed Log Mining & Anomaly Detection Pipeline',
      description:
        'Transforms raw system log telemetry into structured vector embeddings to discover zero-day malicious behaviors in distributed file systems.',
      components: [
        'Drain log parser extracting 29 distinct HDFS event templates',
        'Session windowing over block IDs (BlockID-based aggregation)',
        'TF-IDF vectorization of log event sequences',
        'Hybrid ensemble scoring mechanism combining supervised & unsupervised models',
      ],
      metrics: [
        { name: 'Classification Accuracy', score: '99.4%' },
        { name: 'ROC-AUC Score', score: '0.982' },
        { name: 'Precision on Anomaly Class', score: '98.7%' },
        { name: 'Recall on Anomaly Class', score: '99.1%' },
      ],
    },
    visualTheme: {
      accentGradient: 'from-blue-700 to-indigo-500',
      primaryBadge: 'Big Data & ML Security',
    },
  },
];
