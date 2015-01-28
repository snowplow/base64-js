# base64-js

## Overview

Node.js module to handle base64 encoding arbitrary strings. For use in the [Snowplow JavaScript Tracker][sjt] core.

## Usage:

```javascript
var b64 = require('snowplow-base64');
var encoded = b64.encodeBase64("(some string)");

// Uses URL-safe characters: "_" rather than "/" and "-" rather than "+"
var urlSafeEncoded = b64.encodeBase64UrlSafe("(some string)");
```

## License

Licensed under the **[Apache License, Version 2.0] [license]** (the "License");
you may not use this software except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[sjt]: https://github.com/snowplow/snowplow-javascript-tracker
[license]: http://www.apache.org/licenses/LICENSE-2.0
