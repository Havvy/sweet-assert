const AssertionError = require('assert').AssertionError;
const format = require('util').format;

const assert = function (details) {
	const type = details.type;
	const code = details.code;
	const lhs = details.lhs;
	const rhs = details.rhs;

	if (type === "is") {
		if (!Object.is(lhs, rhs)) {
			throw new AssertionError({
				message: format("Assertion with `%s` failed\n\tcode: %s\n\tlhs: %s\n\trhs: %s", type, code, lhs, rhs)
			});
		}
	}
}

module.exports = assert;