import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const routes = [
  {
    path: 'research',
    canonical: 'https://inlayad.com/research',
    title: 'Research | InlayAd — Universal Memory Protocol (UMP)',
    description: 'Read the research behind InlayAd\'s Probabilistic AI Memory — the Universal Memory Protocol (UMP) achieving 0.82 F1-score for cross-platform identity resolution with sub-4ms latency.',
  },
  {
    path: 'blog',
    canonical: 'https://inlayad.com/blog',
    title: 'Blog | InlayAd — AI Advertising Insights',
    description: 'Insights on AI advertising, LLM monetization, probabilistic targeting, and the future of ads in the AI era. From the team at InlayAd.',
  },
  {
    path: 'blog/future-of-monetization-ai-apps',
    canonical: 'https://inlayad.com/blog/future-of-monetization-ai-apps',
    title: 'The Future of Monetization in AI Apps | InlayAd Blog',
    description: 'How AI apps will monetize without cookies — exploring context-aware ads, probabilistic memory targeting, and the emerging AI advertising stack.',
  },
  {
    path: 'blog/cookies-failing-llm-era',
    canonical: 'https://inlayad.com/blog/cookies-failing-llm-era',
    title: 'Why Cookies Are Failing in the LLM Era | InlayAd Blog',
    description: 'Cookies were designed for the web, not for LLMs and AI interfaces. Learn why traditional tracking breaks down in conversational AI and what comes next.',
  },
  {
    path: 'blog/introducing-ump-probabilistic-ai-memory',
    canonical: 'https://inlayad.com/blog/introducing-ump-probabilistic-ai-memory',
    title: 'Introducing UMP: Probabilistic AI Memory | InlayAd Blog',
    description: 'Introducing the Universal Memory Protocol — a probabilistic framework for cross-platform AI memory and identity resolution powering precision ad targeting.',
  },
  {
    path: 'investors',
    canonical: 'https://inlayad.com/investors',
    title: 'Investors | InlayAd — AI Advertising Network',
    description: 'InlayAd investor information — roadmap, traction, and vision for the AI advertising network built for the AI era.',
  },
];

const baseHtml = readFileSync(join('dist', 'index.html'), 'utf8');

for (const route of routes) {
  mkdirSync(join('dist', route.path), { recursive: true });

  let html = baseHtml
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${route.canonical}" />`
    )
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`
    )
    .replace(
      /(<meta name="description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`
    )
    .replace(
      /(<meta property="og:url"\s+content=")[^"]*(")/,
      `$1${route.canonical}$2`
    )
    .replace(
      /(<meta property="og:title"\s+content=")[^"]*(")/,
      `$1${route.title}$2`
    )
    .replace(
      /(<meta property="og:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`
    )
    .replace(
      /(<meta name="twitter:title"\s+content=")[^"]*(")/,
      `$1${route.title}$2`
    )
    .replace(
      /(<meta name="twitter:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`
    );

  writeFileSync(join('dist', route.path, 'index.html'), html);
  console.log(`✓ dist/${route.path}/index.html (canonical: ${route.canonical})`);
}

console.log(`\nAll ${routes.length} routes will return HTTP 200 with correct canonical tags.`);
