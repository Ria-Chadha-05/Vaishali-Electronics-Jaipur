import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vaishalielectronics.app',
  appName: 'Vaishali Electronics',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
