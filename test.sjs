const assert = require('assert');
const equal = require('deep-eql');
const inspect = require('util').inspect;
const format = require('util').format;

const myassert = require("./assert");

const debug = false;
const logfn = debug ? console.log.bind(console) : function () {};

describe "assert function" {
	describe "is assertions" {
		it "does nothing when the assertion is true" {
			myassert({
				type: "is",
				lhs: 1,
				rhs: 1,
				code: "1 is 1"
			});

			assert(true);
		}

		it "throws an assertion error with lots of details when assertion is wrong" {
			try {
				myassert({
					type: "is",
					lhs: 1,
					rhs: 2,
					code: "1 is 2"
				});

				assert(false);
			} catch (assertionError) {
				assert(assertionError instanceof assert.AssertionError);

				assert(assertionError.message === "Assertion with `is` failed\n\tcode: 1 is 2\n\tlhs: 1\n\trhs: 2");
			}
		}
	}

	// Comment `skip` to see what Mocha will show when throwing a sweet-assert created require('assert').AssertionError.
	describe /* skip */ "purposeful error" {
		it "fails" {
			myassert({
				type: "is",
				lhs: true,
				rhs: false,
				code: "true is false"
			});
		}
	}
}