import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About() {
  return (
    <Layout
      title="About"
      description="About rhinoPix1">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">🦏 About rhinoPix1</Heading>

            <p>
              Hi, I'm <strong>rhinoPix1</strong> — a tinkerer, learner, and weekend hacker.
              This blog is my personal logbook for projects, notes, and experiments.
            </p>

            <h2>What you'll find here</h2>
            <ul>
              <li>🛠️ Hardware & software experiments</li>
              <li>📚 Learning notes and cheatsheets</li>
              <li>💡 Random ideas and weekend projects</li>
            </ul>

            <h2>Tech stack</h2>
            <ul>
              <li>Framework: <a href="https://docusaurus.io/" target="_blank" rel="noreferrer">Docusaurus 3</a></li>
              <li>Theme: Cyberpunk neon (custom CSS)</li>
              <li>i18n: English / 简体中文</li>
              <li>Hosting: GitHub Pages</li>
            </ul>

            <h2>Links</h2>
            <ul>
              <li>💻 GitHub: <a href="https://github.com/yoyojacky" target="_blank" rel="noreferrer">@yoyojacky</a></li>
              <li>📝 Blog: <a href="/blog">/blog</a></li>
              <li>📚 Docs: <a href="/docs">/docs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}