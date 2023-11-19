import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tesis.vite',
  appName: 'tesis-vite',
  webDir: 'build',
  server: {
    url: "https://tesis-vite.fly.dev/",
    cleartext: true  }
};

export default config;
