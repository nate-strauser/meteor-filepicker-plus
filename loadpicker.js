loadPicker = function(key, callback) {
  // Functions to run after the script tag has loaded
  var filepickerLoadCallback = function() {
    filepicker.setKey(key);

    if (Object.prototype.toString.call(callback) === "[object Function")
      callback();
  };

  // If the script doesn't load
  var filepickerErrorCallback = function(error) {
    if(typeof console !== "undefined") {
      console.log(error);
    }
  };

  // Generate a script tag
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//api.filepicker.io/v1/filepicker.js";
  script.onload = filepickerLoadCallback;
  script.onerror = filepickerErrorCallback;

  // Load the script tag
  document.getElementsByTagName('head')[0].appendChild(script);
};
