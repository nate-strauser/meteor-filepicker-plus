loadFilePicker = function(key, callback){
  //todo - shift arguements to support just callback
  if(typeof filepicker === "undefined"){
    if(!key && Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.key)
        key = Meteor.settings.public.filepicker.key;

    if(key){
        // Functions to run after the script tag has loaded
        var filepickerLoadCallback = function() {
          filepicker.setKey(key);

          if (Object.prototype.toString.call(callback) === "[object Function]")
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
      
    }else{
      if(typeof console !== "undefined") {
        console.log("filepicker-plus - tried to load but key not supplied");
      }
    }
  }
};

UI.registerHelper("filepickerIdToImageUrl", function(imageId, options) {
  var url = "";
  if(!imageId && options.hash.placehold_it){
    url = "http://placehold.it/"+options.hash.placehold_it; 
  }else if(!imageId && options.hash.placeholder_url){
    url = options.hash.placeholder_url; 
  }else if(imageId){
    var domain = "www.filepicker.io";
    if(Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.cdn_domain)
      domain = Meteor.settings.public.filepicker.cdn_domain;
    
    url = "//"+domain+"/api/file/" + imageId;
    var convertOptions = _.omit(options.hash, ['placehold_it','placeholder_url']);
    if(_.keys(convertOptions).length > 0)
      url += "/convert?"+$.param(convertOptions);
  }
  return url;
});

UI.registerHelper("filepickerIdToUrl", function(filepickerId) {
  var url = "";
  if(filepickerId){
    var domain = "www.filepicker.io";
    if(Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.cdn_domain)
      domain = Meteor.settings.public.filepicker.cdn_domain;
    
    url = "//"+domain+"/api/file/" + filepickerId;
  }
  return url;
});