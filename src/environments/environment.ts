// /**
//  * Default environment configuration
//  * This file serves as the base environment configuration
//  * It will be overridden by environment-specific files
//  */

// export const environment = {
//   production: false,
//   apiUrl: 'https://api-dev.example.com',
//   version: '1.0.0',
//   defaultLanguage: 'en',
//   tokenExpirationNotificationTime: 5 * 60 * 1000, // 5 minutes in milliseconds
//   sessionTimeout: 30 * 60 * 1000, // 30 minutes in milliseconds,
//   // Enable this flag for development to auto-login with a test user
//   // IMPORTANT: Remember to set this to false before production deployment
//   autoLogin: true,
// };
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,    
  apiUrl: '',
  UserAPIEndpoint:''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
