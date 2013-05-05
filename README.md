
# msgpack-browserify

[msgpack](http://msgpack.org) for node and browsers.

Uses [msgpack-js](https://github.com/creationix/msgpack-js) with
[buffer](http://nodejs.org/api/buffer.html) in node and
[msgpack-js-browser](https://github.com/crreationix/msgpack-js-browser) with
[typed arrays](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays)
in browsers.

[![Build Status](https://travis-ci.org/juliangruber/msgpack-browserify.png?branch=master)](https://travis-ci.org/juliangruber/msgpack-browserify)
[![browser support](https://ci.testling.com/juliangruber/msgpack-browserify.png)](https://ci.testling.com/msgpack-browserify)

## Usage

```js
var msgpack = require('msgpack-browserify');

var msg = msgpack.encode('foo');
console.log(msgpack.decode(msg));
// => 'foo'
```

## API

```js
var msgpack = require('msgpack-browserify');
```

### msgpack.encode(obj)

Convert `obj` to a msgpacked Buffer or typed Array.

### msgpack.decode(buf)

Convert `buf` to its original JavaScript representation.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install msgpack-browserify
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
