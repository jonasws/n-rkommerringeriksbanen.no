// Stub for lottie-web. We don't use Spor's Loader component,
// so lottie-web is dead weight. This stub eliminates it from the bundle.
export default {
  loadAnimation: () => ({ destroy: () => {}, stop: () => {} }),
  destroy: () => {},
};
