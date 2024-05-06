export const uaHelper = {
  isBrowser: () => typeof window !== "undefined",
  isIOS: () => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
    return /iPad|iPhone|iPod/.test(userAgent);
  },
  isMobile: () => {
    const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  },
};
