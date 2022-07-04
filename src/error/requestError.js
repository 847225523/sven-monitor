function requestError() {
  if (!window.XMLHttpRequest) return;
  const XMLHttpRequest = window.XMLHttpRequest;
  const oldSend = XMLHttpRequest.prototype.send;
  const handleEvent = (event) => {
    if (event && event.currentTarget && event.currentTarget.status !== 200) {
      console.log("aaa");
      // 自定义错误上报
    }
  };
  XMLHttpRequest.prototype.send = function () {
    if (this["addEventListener"]) {
      this["addEventListener"]("error", handleEvent);
      this["addEventListener"]("load", handleEvent);
      this["addEventListener"]("abort", handleEvent);
    } else {
      var _oldStateChange = this["onreadystatechange"];
      this["onreadystatechange"] = function (event) {
        if (this.readyState === 4) {
          handleEvent(event);
        }
        _oldStateChange && _oldStateChange.apply(this, arguments);
      };
    }
    return oldSend.apply(this, arguments);
  };
}

function fetchError() {
  if (!window.fetch) return;
  let _oldFetch = window.fetch;
  window.fetch = function () {
    return _oldFetch
      .apply(this, arguments)
      .then((res) => {
        if (!res.ok) {
          // True if status is HTTP 2xx
          // 上报错误
        }
        return res;
      })
      .catch((error) => {
        // 上报错误
        throw error;
      });
  };
}

export {
    requestError,
    fetchError
}
