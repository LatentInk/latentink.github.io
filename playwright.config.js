import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'tests',use:{baseURL:'http://127.0.0.1:8000',headless:true},webServer:{command:'node scripts/preview.mjs',port:8000,reuseExistingServer:false}});
