const Equals = function (array1, array2) {
  // if any array is a falsy value, return
  if (!array1 || !array2) return false;
  // if the argument is the same array, we can be sure the contents are same as well
  if (array1 === array2) return true;
  // compare lengths - can save a lot of time
  if (array1.length != array2.length) return false;

  for (var i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!Equals(array1[i], array2[i])) return false;
    } else if (array1[i] != array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

globalThis.Equals = Equals;
export default Equals;
