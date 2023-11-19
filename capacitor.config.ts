import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tesis.vite',
  appName: 'tesis-vite',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
