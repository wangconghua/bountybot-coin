// BountyBot entrypoint: hand the launch receipt to the grader.
// The coin is already live on Solana; this program only stages
// LAUNCH.json into the output directory so the run can be verified.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'LAUNCH.json'), join(outputDir, 'LAUNCH.json'));
} catch (err) {
  console.error(`BountyBot: could not stage LAUNCH.json from ${botDir} into ${outputDir}: ${err}`);
  process.exit(1);
}

console.log(`BountyBot: LAUNCH.json staged in ${outputDir}.`);
