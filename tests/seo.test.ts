import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Production SEO, Metadata & Discoverability Audit', () => {
  const rootDir = path.resolve(__dirname, '..');
  const playgroundDir = path.resolve(rootDir, 'examples/playground');
  const publicDir = path.resolve(playgroundDir, 'public');
  const indexHtmlPath = path.resolve(playgroundDir, 'index.html');

  it('verifies index.html has complete SEO and Open Graph metadata', () => {
    const html = fs.readFileSync(indexHtmlPath, 'utf-8');

    // Title & Description
    expect(html).toContain(
      '<title>Frutiger.js | Frutiger Aero UI & CSS Design System for React</title>'
    );
    expect(html).toContain('name="description"');
    expect(html).toContain('Frutiger.js is a modern React component library and CSS design system');

    // Canonical & Theme
    expect(html).toContain(
      '<link rel="canonical" href="https://biagio-scaglia.github.io/frutiger-js/" />'
    );
    expect(html).toContain('name="theme-color" content="#38bdf8"');
    expect(html).toContain('rel="icon" type="image/svg+xml" href="./favicon.svg"');
    expect(html).toContain('rel="manifest" href="./site.webmanifest"');

    // Open Graph
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:description"');
    expect(html).toContain(
      'property="og:image" content="https://biagio-scaglia.github.io/frutiger-js/og-image.svg"'
    );
    expect(html).toContain(
      'property="og:url" content="https://biagio-scaglia.github.io/frutiger-js/"'
    );

    // Twitter / X Card
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
    expect(html).toContain(
      'name="twitter:image" content="https://biagio-scaglia.github.io/frutiger-js/og-image.svg"'
    );

    // JSON-LD Structured Data
    expect(html).toContain('application/ld+json');
    expect(html).toContain('"@type": "SoftwareApplication"');
    expect(html).toContain('"name": "Frutiger.js"');
    expect(html).toContain('"applicationCategory": "DeveloperApplication"');
    expect(html).toContain('"@type": "WebSite"');
  });

  it('verifies robots.txt exists and references the sitemap', () => {
    const robotsPath = path.resolve(publicDir, 'robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);
    const robots = fs.readFileSync(robotsPath, 'utf-8');
    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain('Sitemap: https://biagio-scaglia.github.io/frutiger-js/sitemap.xml');
  });

  it('verifies sitemap.xml exists and contains valid canonical URLs', () => {
    const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(sitemap).toContain('https://biagio-scaglia.github.io/frutiger-js/</loc>');
    expect(sitemap).toContain('https://biagio-scaglia.github.io/frutiger-js/#components</loc>');
    expect(sitemap).toContain('https://biagio-scaglia.github.io/frutiger-js/#archive</loc>');
  });

  it('verifies site.webmanifest exists and has valid JSON structure', () => {
    const manifestPath = path.resolve(publicDir, 'site.webmanifest');
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.short_name).toBe('Frutiger.js');
    expect(manifest.theme_color).toBe('#38bdf8');
    expect(manifest.background_color).toBe('#f0f9ff');
  });

  it('verifies custom 404.html page exists with Frutiger Aero copy and SPA routing', () => {
    const notFoundPath = path.resolve(publicDir, '404.html');
    expect(fs.existsSync(notFoundPath)).toBe(true);
    const html = fs.readFileSync(notFoundPath, 'utf-8');
    expect(html).toContain('Oops. This page drifted away.');
    expect(html).toContain('Return to Daylight Home');
    expect(html).toContain('window.location.replace');
  });

  it('verifies vector graphics exist and are valid SVGs', () => {
    const faviconPath = path.resolve(publicDir, 'favicon.svg');
    const ogPath = path.resolve(publicDir, 'og-image.svg');
    expect(fs.existsSync(faviconPath)).toBe(true);
    expect(fs.existsSync(ogPath)).toBe(true);

    const favicon = fs.readFileSync(faviconPath, 'utf-8');
    const og = fs.readFileSync(ogPath, 'utf-8');
    expect(favicon.startsWith('<svg')).toBe(true);
    expect(og.startsWith('<svg')).toBe(true);
    expect(og).toContain('viewBox="0 0 1200 630"');
  });

  it('verifies community and OSS health files exist', () => {
    expect(fs.existsSync(path.resolve(rootDir, 'LICENSE'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, 'README.md'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, 'CONTRIBUTING.md'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, 'CODE_OF_CONDUCT.md'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, 'SECURITY.md'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, 'CHANGELOG.md'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, '.github/workflows/ci.yml'))).toBe(true);
    expect(fs.existsSync(path.resolve(rootDir, '.github/workflows/deploy.yml'))).toBe(true);
  });
});
