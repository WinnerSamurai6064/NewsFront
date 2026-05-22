import Link from 'next/link';
import { articles } from '@/lib/news';

export default function HomePage() {
  const [leadArticle, ...latestArticles] = articles;

  return (
    <main>
      <header className="topbar">
        <nav className="site-shell nav" aria-label="Main navigation">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            Newsfront
          </Link>
          <div className="nav-links">
            <a href="#latest">Latest</a>
            <a href="#technology">Technology</a>
            <a href="#mcp">MCP Desk</a>
            <Link href="/admin">Admin</Link>
          </div>
        </nav>
      </header>

      <section className="site-shell hero">
        <p className="kicker">Independent AI-assisted news desk</p>
        <div className="hero-grid">
          <Link className="lead-story" href={`/articles/${leadArticle.slug}`}>
            <div>
              <p className="kicker">{leadArticle.category}</p>
              <h1 className="headline-xl">{leadArticle.title}</h1>
              <p className="summary">{leadArticle.excerpt}</p>
              <div className="meta-row">
                <span>{leadArticle.author}</span>
                <span>{leadArticle.publishedAt}</span>
                <span>{leadArticle.readTime}</span>
              </div>
            </div>
          </Link>

          <aside className="side-panel" aria-label="Top briefs">
            <p className="kicker">Briefing line</p>
            <h2>Top updates</h2>
            <div className="ticker-list">
              {latestArticles.map((article) => (
                <Link className="ticker-item" href={`/articles/${article.slug}`} key={article.slug}>
                  <p className="kicker">{article.category}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="site-shell section" id="latest">
        <div className="section-head">
          <div>
            <p className="kicker">Latest reporting</p>
            <h2 className="section-title">Front page</h2>
          </div>
          <span className="status-pill">Newsfront live build</span>
        </div>

        <div className="news-grid">
          {articles.map((article) => (
            <Link className="news-card" href={`/articles/${article.slug}`} key={article.slug}>
              <div>
                <p className="kicker">{article.category}</p>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-copy">{article.excerpt}</p>
              </div>
              <div className="meta-row">
                <span>{article.publishedAt}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="mcp">
        <div className="control-card">
          <p className="kicker">MCP-ready foundation</p>
          <h2 className="section-title">AI journalist controls come next</h2>
          <p className="summary">
            Newsfront is prepared for a controlled AI publishing layer: source collection, draft generation,
            article creation, and safe publish tools exposed through API routes.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell">© 2026 Newsfront. Blue newsroom theme, dull-white reading surface.</div>
      </footer>
    </main>
  );
}
