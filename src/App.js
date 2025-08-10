import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import { initGoogleAnalytics, trackPageView } from "./utils/Analytics";
import { useLocation } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;
    initGoogleAnalytics(measurementId);
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <AppRoutes />
    </div>
  );
};

export default App;
