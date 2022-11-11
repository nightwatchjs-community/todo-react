import chalk from 'chalk';
import { spawn } from 'child_process';
import path from 'path';

let viteServerPid;
const VITE_SERVER_URL = process.env.VITE_SERVER_URL || 'http://localhost:5173';

export default {
  async before() {
    const viteServerUrl = this.settings.baseUrl || VITE_SERVER_URL;

    // eslint-disable-next-line no-console
    console.info(chalk.dim(` Starting Vite dev server at: ${viteServerUrl}...`));

    viteServerPid = spawn(path.resolve('node_modules/.bin/vite'), ['--host'], {
      cwd: process.cwd()
    }).pid;

    // eslint-disable-next-line no-console
    console.info(chalk.dim(' ℹ Vite dev server running.'));
  },

  async after() {
    if (viteServerPid) {
      process.kill(viteServerPid);
    }
  }
}