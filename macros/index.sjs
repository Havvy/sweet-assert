macro codeToString {
    case { _ ( $inn ... ) } => {
        var inspect = require('util').inspect;
        var unwrapped = #{ $inn ... }.map(unwrapSyntax);
        var strings = unwrapped.map(function (s) { return s.toString(); }).join(" ");
        var out = makeValue(strings, #{ what_is_this });
        return withSyntax ($out = [out]) #{
            $out
        }
    }
}

let assert = macro {
    rule { $lhs ... is $rhs ... ; } => {
        assert({
            type: "is",
            code: [codeToString($lhs ...), "is", codeToString($rhs ...)].join(" "),
            lhs: $lhs ...,
            rhs: $rhs ...
        });
  	}
}

export assert;