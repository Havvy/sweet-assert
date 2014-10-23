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

		return;
	}

	if (type === "equals") {
		// FIXME: Implement me.
		if (false) {
			throw new AssertionError({
				message: format("Assertion with `%s` failed\n\tcode: %s\n\tlhs: %s\n\trhs: %s", type, code, lhs, rhs)
			});
		}
	}

	throw new AssertionError({
		message: format("Unknown assertion type `%s` asserted.\n\tcode: %s", type, code)
	});
}

module.exports = assert;