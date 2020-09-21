
exports.min = function min (array) {
  if(!array || array .length === 0) return 0;
  array.sort((a, b) => b - a);
  return array.pop();
}

exports.max = function max (array) {
  if(!array || array .length === 0) return 0;
  array.sort((a, b) => a - b);
  return array.pop();
}

exports.avg = function avg (array) {
  if(!array || array .length === 0) return 0;
  let sum = 0;
  array.map(item => sum += item);
  return sum / array.length;
}
