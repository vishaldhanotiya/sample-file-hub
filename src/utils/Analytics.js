import ReactGA from 'react-ga4';

export const initGoogleAnalytics = (measurementId) => {
  console.log("Initializing Google Analytics with Measurement ID:", !process.env.NODE_ENV );
  ReactGA.initialize([
    { 
      trackingId: measurementId,
    },
  ], {
    testMode: !process.env.NODE_ENV , // ✅ true = prevent data from sending
  });
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export const logGAEvent = (event, params = {}) => {
  ReactGA.event(event, params);
};
export const setUserId = (userId) => {
  ReactGA.set({ userId: userId });
};
