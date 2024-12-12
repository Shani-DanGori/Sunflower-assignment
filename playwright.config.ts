import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests', 
  testMatch: '**/*.spec.ts', 
  use: {
    browserName: 'chromium', 
  },
});
