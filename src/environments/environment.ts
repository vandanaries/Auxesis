// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  	apiKey: "AIzaSyAocKDytR7EhYZdO7Kw5lXg9sBCanV0xd0",
    authDomain: "financeservice-46935.firebaseapp.com",
    databaseURL: "https://financeservice-46935.firebaseio.com/",
    projectId: "financeservice-46935",
    storageBucket: "financeservice-46935.appspot.com",
    messagingSenderId: "333238208776"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
