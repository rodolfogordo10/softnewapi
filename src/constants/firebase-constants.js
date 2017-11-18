import admin from 'firebase-admin';

const serviceAccount = require('../resources/serviceAccountKey.json');

const defaultAppConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://softnew-6ad61.firebaseio.com/'
};

export default defaultAppConfig;
