Sweet.js plugin for [Elixir style assertions](http://elixir-lang.org/docs/stable/ex_unit/ExUnit.Assertions.html#assert/1)

Only targeting Node 0.10.x or higher.

[![NPM](https://nodei.co/npm/sweet-assert.png?downloads=true&stars=true)](https://nodei.co/npm/tennu/)

## Example

### Testfile
```javascript
// Uses sweet-bdd
var assert = require('sweet-assert');

describe "sugary breads" {
	it "does not know that the cake is a lie" {
		assert "the cake" is "a lie"
	}
}
```

### Output

```
Assertion with `is` failed
code: "cake" === "the lie"
lhs:  "cake"
rhs:  "the lie"
```
