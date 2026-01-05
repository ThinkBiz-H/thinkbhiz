import { getAnalyticsInstance } from "./firebase";
import { logEvent } from "firebase/analytics";

export async function trackEvent(eventName, params) {
  const analytics = await getAnalyticsInstance();
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
}
