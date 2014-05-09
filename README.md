# Ink Filepicker on demand package with helpers for Meteor

Package to use Filepicker in Meteor, loads on demand, optional callback.  See meteor cookbook filepicker reciepe for more details and examples.

## How to install

Install Meteorite (if not already installed)
```
npm install -g meteorite
```

Add package
```
mrt add filepicker-plus
```

## Using Meteor.settings

```
{
  "public" : {
    "filepicker":{
      "key":"<YOUR API KEY>",
      "cdn_domain":"<YOUR CDN DOMAIN>"
    }
  }
}
```
if you specify an api key, the call to `loadFilePicker()` does not need a key arguement, it will read from the settings


## On demand loading

Load once for your whole application at startup or as needed from template created or rendered functions
```
loadFilePicker('<YOUR KEY>');
//can leave out key if its in settings
```

You can call this over and over again.  It will detect if filepicker has already been loaded, only loading the script when needed.

## Iron Router Integration

if you have specific routes that need to use filepicker, you can load them for just these routes
```
Router.onBeforeAction(function(){
  loadFilePicker('<YOUR KEY>');
  //can leave out key if its in settings
},{only:['<ROUTE NAME>','<ROUTE NAME>']});
```

## Image Url Helper
If you have a paid filepicker plan, you can use this helper to resize images on demand.  See https://developers.inkfilepicker.com/docs/web/#inkblob-images

if you set up a CDN with filepicker (https://developers.inkfilepicker.com/docs/cdn/) and you set the `cdn_domain` setting, the urls returned will be to your cdn. `//<CDN DOMAIN>/api/file/<FILE ID>`  If not, they will be filepicker.com urls `//www.filepicker.com/api/file/<FILE ID>`

size an image
```
{{filepickerIdToImageUrl myImageId h=200 w=200}}
```
crop an image to thumbnail size and align to faces
```
{{filepickerIdToImageUrl myImageId h=75 w=75 align='faces' fit='crop'}}
```

size an image, optionally returning a placehold.it url if `myImageId` is null
```
{{filepickerIdToImageUrl myImageId h=200 w=200 placehold_it='200x200&text=placeholder'}}
```

size an image, optionally returning url if `myImageId` is null
```
{{filepickerIdToImageUrl myImageId h=200 w=200 placeholder_url='/images/placholder.jpg'}}
```

All properties passed to the helper except for `placehold_it` and `placeholder_url` will be turned into a query string, so you can use the full options of the api (h, w, fit, format, quality, rotate, watermark, etc).

### Credits
Forked from impicker
