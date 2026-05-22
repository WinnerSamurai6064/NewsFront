import Link from 'next/link';

const controls = [
  'Trusted source list',
  'Article draft queue',
  'Low-risk auto publish',
  'Manual pause switch',
  'MCP tool audit log',
];

export default function AdminPage() {
  return (
    <main>
      <header className="topbar">
        <nav className="site-shell nav" aria-label="Admin navigation">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            Newsfront
          </Link>
          <div className="nav-links">
            <Link href="/">Front page</Link>
          </div>
        </nav>
      </header>

      <section className="site-shell hero">
        <p className="kicker">Admin console</p>
        <h1 className="headline-xl">Newsfront control room</h1>
        <p className="summary">
          This placeholder is ready for authentication, source management, article controls, and the AI journalist dashboard.
        </p>

        <div className="control-card">
          <span className="status-pill">AI journalist: planned</span>
          <div className="ticker-list">
            {controls.map((control) => (
              <div className="ticker-item" key={control}>
                <h3>{control}</h3>
                <p>Reserved for the next implementation pass.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
