/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-2.js
 * @description Array.prototype.reduceRight considers new value of elements in array after it is called
 */


function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr[3] = -2;
    arr[0] = -1;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];
  if(arr.reduceRight(callbackfn) === 13)
    return true;  
  
 }
runTestCase(testcase);
