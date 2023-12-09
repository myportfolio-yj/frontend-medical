import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.medical.frontend',
  appName: 'frontend-medical',
  webDir: 'dist/frontend-medical/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
