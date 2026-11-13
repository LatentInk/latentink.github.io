import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'tests',use:{baseURL:'http://127.0.0.1:8013',headless:true},webServer:{command:'node scripts/preview.mjs',port:8013,reuseExistingServer:false}});
