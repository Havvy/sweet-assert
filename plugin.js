let assert = macro {
	rule ($expr ...) => {
		assert($expr)
	}
}