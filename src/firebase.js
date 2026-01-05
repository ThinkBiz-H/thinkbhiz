// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvp0Muo1g8zPgIfdWOvU4aWilTS7nh9Qs",
  authDomain: "thinkbiz-website.firebaseapp.com",
  databaseURL: "https://thinkbiz-website-default-rtdb.firebaseio.com",
  projectId: "thinkbiz-website",
  storageBucket: "thinkbiz-website.firebasestorage.app",
  messagingSenderId: "439084380154",
  appId: "1:439084380154:web:e9161f089927c9abadbe43",
  measurementId: "G-7VNSQ0KB1V",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

let analyticsInstance = null;

export async function getAnalyticsInstance() {
  if (analyticsInstance) return analyticsInstance;
  const supported = await isSupported();
  if (supported) {
    analyticsInstance = getAnalytics(app);
    return analyticsInstance;
  }
  return null;
}

export { db, auth };
