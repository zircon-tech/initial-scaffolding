export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TZ: string;
      PORT: number;
      NODE_ENV: 'development' | 'production';
    }
  }
}
