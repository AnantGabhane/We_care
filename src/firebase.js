import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCHM9mBMHhQozb9F6hF1tRRSSK4lq9IVPE",
  authDomain: "i-care-cbafc.firebaseapp.com",
  projectId: "i-care-cbafc",
  storageBucket: "i-care-cbafc.appspot.com",
  messagingSenderId: "725210025725",
  appId: "1:725210025725:web:6a0442e1c03a910d023894"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
