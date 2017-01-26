# Cleverbot

In order to use this package, you must obtain a Cleverbot API key [here](http://cleverbot.com/api).

### Usage

```javascript
const Cleverbot = require('cleverbot');

let clev = new Cleverbot({
  key: 'YOUR_API_KEY' // Can be obtained at http://cleverbot.com/api
});

clev.query('Just a small town girl')
.then(function (response) {
  console.log(response.output); //=> Livin' in a lonely world!

  clev.query(response.output, {
    cs: response.cs
  })
  .then(function (response2) {
    console.log(response2.output); //=> She took the midnight train going anywhere.
  });

});
```
