import { NextResponse } from 'next/server';
import { articles } from '@/lib/news';

export async function GET() {
  return NextResponse.json({
    name: 'newsfront-mcp-ready-api',
    status: 'online',
    tools: [
      'list_articles',
      'get_article',
      'create_draft_planned',
      'publish_article_planned',
      'fetch_sources_planned',
    ],
    articles: articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      category: article.category,
    })),
  });
}
