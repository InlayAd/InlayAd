import { mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const routes = [
  'research',
  'blog',
  'blog/future-of-monetization-ai-apps',
  'blog/cookies-failing-llm-era',
  'blog/introducing-ump-probabilistic-ai-memory',
  'investors',
];

for (const route of routes) {
  mkdirSync(join('dist', route), { recursive: true });
  copyFileSync(join('dist', 'index.html'), join('dist', route, 'index.html'));
  console.log(`✓ dist/${route}/index.html`);
}

console.log(`\nAll ${routes.length} routes will return HTTP 200 on GitHub Pages.`);
