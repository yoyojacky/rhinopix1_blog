# rhinoPix1 Blog

🦏 Personal blog of rhinoPix1 — a cyberpunk-themed logbook for projects, notes, and experiments.

- 🌐 **Live site**: https://yoyojacky.github.io/rhinopix1_blog/
- 💻 **Repo**: git@github.com:yoyojacky/rhinopix1_blog.git
- 🛠️ **Built with**: [Docusaurus 3](https://docusaurus.io/)
- 🎨 **Theme**: Custom cyberpunk neon (CSS variables in `src/css/custom.css`)
- 🌐 **Languages**: English (default) · 简体中文

---

## Local Development

### Prerequisites

- Node.js >= 18
- Yarn 1.x

### Install

```bash
yarn install
```

### Start dev server

```bash
yarn start
```

Opens http://localhost:50011/rhinopix1_blog/ in your browser. Edits to `docs/`, `blog/`, and `src/` hot-reload automatically.

> Note: Docusaurus dev server has limited i18n support. Use `yarn build && yarn serve` (port 50012) to preview translated content fully.

### Build for production

```bash
yarn build      # generates static files in build/
yarn serve      # serves build/ at http://localhost:50012/rhinopix1_blog/
```

### Translate content

After editing English content, refresh the i18n translation stubs:

```bash
yarn docusaurus write-translations --locale zh-Hans
```

Then edit `i18n/zh-Hans/...` to fill in Chinese translations.

---

## Project Structure

```
docs/                  Knowledge base (long-form notes, project docs)
blog/                  Blog posts (dated articles)
  authors.yml             Author registry
src/
  css/custom.css         Cyberpunk theme (the soul of this blog)
  pages/                 Custom React pages (e.g., about.tsx)
  components/            Custom React components
static/img/             Static assets (logos, favicon)
i18n/zh-Hans/           Chinese translations (UI strings + content)
docusaurus.config.js    Core configuration
sidebars.js             Docs sidebar
```

See [AGENTS.md](./AGENTS.md) for the full author + AI assistant conventions.

---

## Adding a new blog post

1. Create `blog/YYYY-MM-DD-my-slug.md` with frontmatter:
   ```yaml
   ---
   slug: my-slug
   title: My Title
   authors: [rhinoPix1]
   tags: [tag1, tag2]
   ---
   ```
2. Add `<!-- truncate -->` after the first 1-2 paragraphs.
3. (Optional) Translate to Chinese: `i18n/zh-Hans/docusaurus-plugin-content-blog/YYYY-MM-DD-my-slug.md`
4. Commit and push.

---

## License

MIT — do whatever you want, but attribution appreciated.
