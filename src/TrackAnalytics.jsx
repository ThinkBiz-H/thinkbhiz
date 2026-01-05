// src/TrackAnalytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "./firebase";

export default function TrackAnalytics() {
  const location = useLocation();

  useEffect(() => {
    async function logPageView() {
      const analytics = await getAnalyticsInstance();
      if (analytics) {
        logEvent(analytics, "page_view", {
          page_path: location.pathname,
        });
      }
    }
    logPageView();
  }, [location]);

  return null;
}
