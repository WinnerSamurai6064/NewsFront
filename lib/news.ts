export type NewsArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};

export const articles: NewsArticle[] = [
  {
    slug: 'ai-newsroom-systems-enter-a-new-era',
    category: 'Technology',
    title: 'AI newsroom systems enter a new era of fast publishing',
    excerpt:
      'Publishers are experimenting with editorial assistants that can draft, summarize, tag, and prepare stories while humans shape the final direction.',
    author: 'Newsfront Desk',
    publishedAt: 'May 22, 2026',
    readTime: '4 min read',
    body: [
      'News organizations are entering a period where editorial software is becoming more active, more automated, and more closely connected to publishing systems.',
      'The strongest approach is not to let software invent stories from nothing. The better model is source-backed writing, where trusted feeds, documents, and verified links shape every published article.',
      'For small publishers, this changes the economics of running a news site. A lean newsroom can now prepare summaries, headlines, tags, and social captions without building a large production team from day one.',
      'The challenge is control. Any automated system needs strict rules for sourcing, duplication, risk categories, and publishing limits. Without those controls, speed can damage trust.',
    ],
  },
  {
    slug: 'vercel-projects-remain-popular-for-modern-publishing',
    category: 'Web',
    title: 'Vercel projects remain popular for modern publishing workflows',
    excerpt:
      'Fast deployments, serverless routes, and scheduled jobs make Vercel a practical home for lightweight editorial products.',
    author: 'Newsfront Web Desk',
    publishedAt: 'May 22, 2026',
    readTime: '3 min read',
    body: [
      'Modern publishing sites benefit from infrastructure that can deploy quickly, scale without heavy server management, and connect cleanly to external databases.',
      'A Next.js application gives a news project a clean route structure, strong SEO support, and server-side features for article pages, admin tools, and content APIs.',
      'For a project like Newsfront, the first goal is a strong public reading experience. The second goal is a controlled editor system that can later connect to AI and MCP tools.',
    ],
  },
  {
    slug: 'mcp-gives-ai-apps-a-tool-layer',
    category: 'AI Tools',
    title: 'MCP gives AI apps a cleaner tool layer',
    excerpt:
      'A controlled tool layer can let different AI models work with the same website functions without giving them direct database access.',
    author: 'Newsfront AI Desk',
    publishedAt: 'May 22, 2026',
    readTime: '5 min read',
    body: [
      'The model context protocol gives developers a way to expose tools to AI systems through a standard pattern.',
      'In a publishing product, this means the AI can ask to search articles, create drafts, fetch sources, or publish a post through controlled functions.',
      'The important design choice is that the MCP server should enforce the rules. Models should request actions, while the application decides whether those actions are allowed.',
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
