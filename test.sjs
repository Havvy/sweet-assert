const assert = require('assert');
const inspect = require('util').inspect;
const format = require('util').format;

const sweetassert = require("./assert");

const debug = false;
const logfn = debug ? console.log.bind(console) : function () {};

var reached = true;
var unreached = false;

describe "assert function" {
	describe "unknown assertion types" {
		it "throws an error" {
			// assert.throws(function () {
			// 	sweetassert({
			// 		type: "unknown",
			// 		code: "the code"
			// 	});
			// }, function (assertionError) {
			// 	assert(assertionError instanceof assert.AssertionError);
			// 	assert(assertionError.message === "Unknown assertion type `unknown` asserted.\n\tcode: the code");
			// });
			try {
				sweetassert({
					type: "unknown",
					code: "the code"
				});

				assert(unreached);
			} catch (assertionError) {
				assert(assertionError instanceof assert.AssertionError);
				assert(assertionError.message === "Unknown assertion type `unknown` asserted.\n\tcode: the code")
			}
		}
	}

	describe "is assertions" {
		it "does nothing when the assertion is true" {
			sweetassert({
				type: "is",
				lhs: 1,
				rhs: 1,
				code: "1 is 1"
			});

			assert(reached);
		}

		it "throws an assertion error with lots of details when assertion is wrong" {
			try {
				sweetassert({
					type: "is",
					lhs: 1,
					rhs: 2,
					code: "1 is 2"
				});

				assert(unreached);
			} catch (assertionError) {
				assert(assertionError instanceof assert.AssertionError);

				assert(assertionError.message === "Assertion with `is` failed\n\tcode: 1 is 2\n\tlhs: 1\n\trhs: 2");
			}
		}
	}

	describe skip "equals assertion" {
		it "considers arrays with primitive values" {
			sweetassert({
				type: "equals",
				lhs: [1, 2, 3],
				rhs: [1, 2, 3],
				code: "[1, 2, 3] equals [1, 2, 3]"
			});
		}
	}
}

{
	// This section is for see what an assertion error looks like.
	// Switch out 'comment' and 'uncomment' to enable or disable
	// this section.
	macro comment {
		rule { --[[ $expr ... ]]-- } => {}
	}

	macro uncomment {
		rule { --[[ $expr ... ]]-- } => { $expr ... }
	}

	comment --[[
		describe only "purposeful error" {
			it "fails" {
				sweetassert({
					type: "is",
					lhs: true,
					rhs: false,
					code: "true is false"
				});
			}
		}
	]]--
}