// Build script for Vercel deployment
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Building for Vercel deployment...');

// Build the Vite frontend
console.log('Building frontend...');
execSync('vite build', { stdio: 'inherit' });

// Copy shared schema for serverless function
const sharedDir = join(__dirname, 'api', 'shared');
if (!fs.existsSync(sharedDir)) {
  fs.mkdirSync(sharedDir, { recursive: true });
}

fs.copyFileSync(
  join(__dirname, 'shared', 'schema.ts'),
  join(__dirname, 'api', 'shared', 'schema.js')
);

console.log('Build complete!');