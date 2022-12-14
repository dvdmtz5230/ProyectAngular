// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
  firebase: {
    apiKey: 'AIzaSyDXfMTMIJtARdUN1Dtax9_QFo3z0UwReLA',
    authDomain: 'pruebaangular-39655.firebaseapp.com',
    databaseURL: 'https://pruebaangular-39655-default-rtdb.firebaseio.com',
    projectId: 'pruebaangular-39655',
    storageBucket: 'pruebaangular-39655.appspot.com',
    messagingSenderId: '925273290737',
    appId: '1:925273290737:web:4573f2b7550243034eb650',
    measurementId: 'G-R1B2BQCQDB',
  },
};
