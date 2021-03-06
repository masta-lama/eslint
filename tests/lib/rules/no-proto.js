/**
 * @fileoverview Tests for no-proto rule.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/no-proto", {
    valid: [
        "var a = test[__proto__];",
        "var __proto__ = null;"
    ],
    invalid: [
        { code: "var a = test.__proto__;", errors: [{ message: "The '__proto__' property is deprecated.", type: "MemberExpression"}] },
        { code: "var a = test['__proto__'];", errors: [{ message: "The '__proto__' property is deprecated.", type: "MemberExpression"}] }
    ]
});
