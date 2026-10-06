import { Publication } from '../types';

export const researchData: Publication = {
  title: 'Multilingual AI in Customer Support',
  conference: 'ICNKAI-2025 International Conference on Neural Networks and Artificial Intelligence',
  status: 'Published & Presented',
  year: '2025',
  authors: ['Mohammed Areef A', 'Research Collaborators', 'Faculty Advisors'],
  abstract:
    'Modern global enterprise customer service infrastructures suffer from significant language disparity barriers, where regional and multilingual queries in non-dominant dialects suffer from substandard automated intent resolution. This paper presents a novel multilingual natural language processing framework integrating transformer-based cross-lingual semantic embeddings with zero-shot transfer learning. By aligning multi-dialect conversational intent representations into a unified semantic manifold, our system achieves high-accuracy customer query routing, contextual emotion parsing, and automated resolution across diverse linguistic inputs without requiring voluminous labeled training corpora in each target language.',
  keywords: [
    'Multilingual NLP',
    'Cross-Lingual Intent Recognition',
    'Transformer Embeddings',
    'Zero-Shot Transfer Learning',
    'Customer Support Automation',
    'Semantic Manifold Alignment',
  ],
  keyFindings: [
    'Achieved an 89.6% zero-shot intent classification accuracy across 6 regional dialects using a shared cross-lingual embedding projection.',
    'Reduced customer support ticket routing latency by 44% compared to traditional cascading translation-then-classify pipelines.',
    'Demonstrated significant robustness against code-mixed and colloquial queries common in South Asian conversational support datasets.',
    'Published in the peer-reviewed proceedings of the ICNKAI-2025 International Conference.',
  ],
  citationText: `@inproceedings{areef2025multilingual,
  title={Multilingual AI in Customer Support: Cross-Lingual Intent Recognition and Semantic Manifold Alignment},
  author={Mohammed Areef A},
  booktitle={Proceedings of the 2025 International Conference on Neural Networks and Artificial Intelligence (ICNKAI-2025)},
  year={2025},
  publisher={IEEE / Conference Proceedings}
}`,
};
