/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-221.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index property, test TypeError is thrown  when the [[Value]] field of 'desc' and the [[Value]] attribute value of 'name' are two numbers with different values (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, 0, {
            value: 101,
            writable: false,
            configurable: false
        });

        try {
            Object.defineProperty(arrObj, "0", { value: 123 });
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, "0", 101, false, false, false);
        }
    }
runTestCase(testcase);
