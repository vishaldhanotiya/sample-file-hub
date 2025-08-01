import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzRfWwK-NklZgtdfEEagAtcxBW5JJJqVA",
  authDomain: "sample-file-hub.firebaseapp.com",
  projectId: "sample-file-hub",
  storageBucket: "sample-file-hub.firebasestorage.app",
  messagingSenderId: "13545817329",
  appId: "1:13545817329:web:796f90b3059f31d3595550",
  measurementId: "G-C1429TTFYX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;