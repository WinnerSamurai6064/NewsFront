import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/lib/news';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: 'Article not found | Newsfront' };
  }

  return {
    title: `${article.title} | Newsfront`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <header className="topbar">
        <nav className="site-shell nav" aria-label="Article navigation">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            Newsfront
          </Link>
          <div className="nav-links">
            <Link href="/">Front page</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </nav>
      </header>

      <article className="site-shell article-wrap">
        <p className="kicker">{article.category}</p>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-deck">{article.excerpt}</p>
        <div className="meta-row">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
          <span>{article.readTime}</span>
        </div>

        <div className="article-body">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h2>Editorial note</h2>
          <p>
            This page demonstrates the standard Newsfront article format: strong headline, clear deck,
            readable paragraphs, and restrained newsroom spacing.
          </p>
        </div>
      </article>
    </main>
  );
}
