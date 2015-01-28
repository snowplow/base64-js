# base64-js

## Overview

Node.js module to handle base64 encoding arbitrary strings. For use in the [Snowplow JavaScript Tracker][sjt] core.

## Usage:

```javascript
var b64 = require('snowplow-base64');
var encoded = b64.base64encode("(some string)");
```

## License

Licensed under the [MIT license][mit].

[sjt]: https://github.com/snowplow/snowplow-javascript-tracker
[mit]: http://opensource.org/licenses/MIT
