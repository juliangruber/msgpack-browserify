var msgpack = require('..');
var test = require('tape');

function Buffer(string) {
  var buffer = new ArrayBuffer(msgpack.utf8ByteCount(string));
  var view = new DataView(buffer);
  msgpack.utf8Write(view, 0, string);
  return buffer;
}

var tests = [
  "$", "¢", "€",
  "임창진",
  true, false, null, undefined,
  0, 1, -1, 2, -2, 4, -4, 6, -6,
  0x10, -0x10, 0x20, -0x20, 0x40, -0x40,
  0x80, -0x80, 0x100, -0x100, 0x200, -0x200,
  0x1000, -0x1000, 0x10000, -0x10000,
  0x20000, -0x20000, 0x40000,-0x40000,
  10, 100, 1000, 10000, 100000, 1000000,
  -10, -100, -1000, -10000, -100000, -1000000,
  'hello', 'world', Buffer("Hello"), Buffer("World"),
  [1,2,3], [], {name: "Tim", age: 29}, {},
  {a: 1, b: 2, c: [1, 2, 3]}, [[],[]]
];

for (var i = 0; i < tests.length; i++) (function (value) {
  test(JSON.stringify(value), function (t) {
    var buffer = msgpack.encode(value);
    var decoded = msgpack.decode(buffer);
    var valueString = msgpack.inspect(value);
    var decodedString = msgpack.inspect(decoded);
    t.equal(valueString, decodedString);
    t.end();
  });
})(tests[i]);
