// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBoC7QlIxMf1bQ33UNEpvB1izKux3tc4-A",
    authDomain: "todolistapp-9ba95.firebaseapp.com",
    databaseURL: "https://todolistapp-9ba95.firebaseio.com",
    projectId: "todolistapp-9ba95",
    storageBucket: "todolistapp-9ba95.appspot.com",
    messagingSenderId: "1030551811866"
  }
};
