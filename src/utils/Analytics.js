import ReactGA from 'react-ga4';

export const initGoogleAnalytics = (measurementId) => {
  ReactGA.initialize([
    { 
      trackingId: measurementId,
    },
  ], {
    gaOptions: { anonymizeIp: true },
    testMode: !process.env.NODE_ENV , // ✅ true = prevent data from sending
  });
};

export const logGAEvent = (event, params = {}) => {
  ReactGA.event(event, params);
};
export const setUserId = (userId) => {
  ReactGA.set({ userId: userId });
};


export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackDownload = (fileType, fileName, fileFormat, fileSize) => {
  ReactGA.event('file_download', {
    file_type: fileType,
    file_name: fileName,
    file_format: fileFormat,
    file_size: fileSize
  });
};

export const trackMediaView = (mediaType, mediaName) => {
  ReactGA.event('view_item', {
    media_type: mediaType,
    media_name: mediaName
  });
};



export const trackDownloadError = (fileType, errorCode) => {
  ReactGA.event('download_error', {
    file_type: fileType,
    error: errorCode // e.g., "404", "network_failure"
  });
};

// utils/analytics.js
export const trackScrollDepth = () => {
  const percentages = [25, 50, 75, 100];
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop + clientHeight) / scrollHeight * 100;

    percentages.forEach(percent => {
      if (scrolled >= percent) {
        ReactGA.event('scroll_depth', {
          depth: `${percent}%`
        });
      }
    });
  });
};