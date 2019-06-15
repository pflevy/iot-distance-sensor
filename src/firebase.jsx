import firebase from "firebase";

const firebaseProjectName = "<YOUR_FIREBASE_PROJECT_NAME>";

const config = {
  apiKey: "<YOUR_WEB_API_KEY>",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);
export default firebase;
