#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper for colored console logs
const colors = {
  cyan: (msg) => `\x1b[36m${msg}\x1b[0m`,
  green: (msg) => `\x1b[32m${msg}\x1b[0m`,
  yellow: (msg) => `\x1b[33m${msg}\x1b[0m`,
  blue: (msg) => `\x1b[34m${msg}\x1b[0m`,
  red: (msg) => `\x1b[31m${msg}\x1b[0m`,
  bold: (msg) => `\x1b[1m${msg}\x1b[0m`,
};

function run(cmd, opts = {}) {
  console.log(colors.cyan(`> ${cmd}`));
  return execSync(cmd, { cwd: rootDir, stdio: 'inherit', ...opts });
}

function getJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

function bumpVersion(currentVersion, type) {
  const parts = currentVersion.split('.').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid semver version: ${currentVersion}`);
  }
  let [major, minor, patch] = parts;
  if (type === 'major') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (type === 'minor') {
    minor += 1;
    patch = 0;
  } else if (type === 'patch') {
    patch += 1;
  } else if (/^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/.test(type)) {
    return type;
  } else {
    throw new Error(`Invalid bump type or semver version: ${type}. Expected patch, minor, major, or X.Y.Z`);
  }
  return `${major}.${minor}.${patch}`;
}

async function main() {
  console.log(colors.bold(colors.blue('\n╔══════════════════════════════════════════════════════╗')));
  console.log(colors.bold(colors.blue('║      💧✨ FRUTIGER.JS MONOREPO RELEASE SYSTEM ✨💧    ║')));
  console.log(colors.bold(colors.blue('╚══════════════════════════════════════════════════════╝\n')));

  const args = process.argv.slice(2);
  const isPublish = args.includes('--publish');
  const isDryRun = args.includes('--dry-run');
  const skipBuild = args.includes('--skip-build');
  const skipGit = args.includes('--skip-git');
  const versionArg = args.find((a) => !a.startsWith('--')) || 'patch';

  const rootPkgPath = path.resolve(rootDir, 'package.json');
  const corePkgPath = path.resolve(rootDir, 'packages/core/package.json');
  const reactPkgPath = path.resolve(rootDir, 'packages/react/package.json');
  const playgroundPkgPath = path.resolve(rootDir, 'examples/playground/package.json');
  const appTsxPath = path.resolve(rootDir, 'examples/playground/src/App.tsx');

  const rootPkg = getJson(rootPkgPath);
  const oldVersion = rootPkg.version;
  const newVersion = bumpVersion(oldVersion, versionArg);

  console.log(`${colors.yellow('Current Version:')} ${colors.bold(oldVersion)}`);
  console.log(`${colors.green('Target Version: ')} ${colors.bold(newVersion)}`);
  console.log(`${colors.cyan('Publish to NPM:')} ${isPublish ? 'Yes' : 'No (use --publish to upload to npm)'}`);
  console.log(`${colors.cyan('Dry Run:')}        ${isDryRun ? 'Yes' : 'No'}\n`);

  if (isDryRun) {
    console.log(colors.yellow('[DRY RUN] Skipping file writes and git push.'));
    return;
  }

  // 1. Update package.json files
  console.log(colors.bold('1. Updating package.json versions...'));

  // Root
  rootPkg.version = newVersion;
  writeJson(rootPkgPath, rootPkg);
  console.log(colors.green(`  ✓ Root package.json -> ${newVersion}`));

  // Core
  const corePkg = getJson(corePkgPath);
  corePkg.version = newVersion;
  writeJson(corePkgPath, corePkg);
  console.log(colors.green(`  ✓ @frutiger-js/core -> ${newVersion}`));

  // React
  const reactPkg = getJson(reactPkgPath);
  reactPkg.version = newVersion;
  if (reactPkg.dependencies && reactPkg.dependencies['@frutiger-js/core']) {
    reactPkg.dependencies['@frutiger-js/core'] = `^${newVersion}`;
  }
  writeJson(reactPkgPath, reactPkg);
  console.log(colors.green(`  ✓ @frutiger-js/react -> ${newVersion} (dep @frutiger-js/core: ^${newVersion})`));

  // Playground
  const playgroundPkg = getJson(playgroundPkgPath);
  playgroundPkg.version = newVersion;
  if (playgroundPkg.dependencies) {
    if (playgroundPkg.dependencies['@frutiger-js/core']) {
      playgroundPkg.dependencies['@frutiger-js/core'] = `^${newVersion}`;
    }
    if (playgroundPkg.dependencies['@frutiger-js/react']) {
      playgroundPkg.dependencies['@frutiger-js/react'] = `^${newVersion}`;
    }
  }
  writeJson(playgroundPkgPath, playgroundPkg);
  console.log(colors.green(`  ✓ @frutiger-js/playground -> ${newVersion}`));

  // 2. Update playground App.tsx version mentions
  console.log(colors.bold('\n2. Updating Playground UI version badges...'));
  if (fs.existsSync(appTsxPath)) {
    let appContent = fs.readFileSync(appTsxPath, 'utf-8');
    appContent = appContent.replaceAll(`v${oldVersion}`, `v${newVersion}`);
    fs.writeFileSync(appTsxPath, appContent, 'utf-8');
    console.log(colors.green(`  ✓ examples/playground/src/App.tsx updated from v${oldVersion} to v${newVersion}`));
  }

  // 3. Format, Lint, Test & Build
  if (!skipBuild) {
    console.log(colors.bold('\n3. Running Code Quality & Verification Suite...'));
    run('npm run format');
    run('npm run lint');
    run('npm test');
    run('npm run typecheck');
    run('npm run build');
    console.log(colors.green('  ✓ Test, Lint, Typecheck and Build passed 100%!'));
  }

  // 4. Git Commit, Tag & Push
  if (!skipGit) {
    console.log(colors.bold('\n4. Committing and Tagging Release in Git...'));
    run('git add .');
    try {
      run(`git commit -m "chore(release): v${newVersion} by Biagio Scaglia"`);
    } catch {
      console.log(colors.yellow('  (Working tree clean or already committed)'));
    }
    try {
      run(`git tag -a v${newVersion} -m "Release v${newVersion} by Biagio Scaglia"`);
      console.log(colors.green(`  ✓ Git tag v${newVersion} created`));
    } catch {
      console.log(colors.yellow(`  (Tag v${newVersion} already exists or was created)`));
    }
    console.log(colors.bold('\nPushing branch & tags to GitHub...'));
    run('git push origin master --tags');
    console.log(colors.green('  ✓ Pushed to GitHub repository with tags!'));
  }

  // 5. NPM Publish (if requested)
  if (isPublish) {
    console.log(colors.bold('\n5. Publishing packages to NPM...'));
    
    console.log(colors.cyan('\nPublishing @frutiger-js/core...'));
    run('npm publish ./packages/core --access public');
    console.log(colors.green('  ✓ @frutiger-js/core published to npm!'));

    console.log(colors.cyan('\nPublishing @frutiger-js/react...'));
    run('npm publish ./packages/react --access public');
    console.log(colors.green('  ✓ @frutiger-js/react published to npm!'));
  }

  console.log(colors.bold(colors.green('\n🎉 SUCCESS! Release completed successfully.')));
  console.log(colors.cyan(`\nNew version: ${newVersion}`));
  if (!isPublish) {
    console.log(colors.yellow('Note: Packages were updated and pushed to Git. To publish on NPM, run:'));
    console.log(colors.bold(`  npm run publish:npm\n`));
  }
}

main().catch((err) => {
  console.error(colors.red(`\n❌ Release Error: ${err.message}`));
  process.exit(1);
});
