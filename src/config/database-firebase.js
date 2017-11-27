import admin from 'firebase-admin';
import firebaseContants  from '../constants/firebase-constants';

// const { defaultAppConfig } = firebaseContants;

// Initialize the default app
const defaultApp = admin.initializeApp(firebaseContants);

// Retrieve services via the defaultApp variable...
const defaultAuth = defaultApp.auth;
const defaultDatabase = defaultApp.database;

export default { defaultAuth, defaultDatabase };
