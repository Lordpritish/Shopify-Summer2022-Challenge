
// Firebase Setup
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../serviceAccountKey.json');
var admin = require("firebase-admin");

// Firebase Database and Storage setup
var admin = require("firebase-admin");

const app = admin.initializeApp({
    credential: cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
});

const db = getFirestore(app);

// // Create a root reference
const bucket = admin.storage().bucket()

module.exports = { db, bucket }



