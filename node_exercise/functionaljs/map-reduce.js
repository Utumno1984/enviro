module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(a, b, index, array){
  	a[index] = fn(b);d
  	return a;
  }, []);
}