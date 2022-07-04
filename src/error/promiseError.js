export const promiseError = () => {
  window.addEventListener(
    "unhandledrejection",
    (err) => {
      console.log(err,'dsssss');
      const {
        timeStamp,
        type,
        reason,
      } = err
      const errorLog = {
        title:document.title,
        url:window.location.href,
        userAgent:window.navigator.userAgent,
        timeStamp,
        type,
        reason,
        errorType:'promise错误'
      }
      tracker.send(errorLog)
      err.preventDefault();
    },
    false
  );
};
