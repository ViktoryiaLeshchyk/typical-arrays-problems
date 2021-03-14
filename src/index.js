
exports.min = function min (array) {
 let result;
 if (array && array.length)
{
  return  result = Math.min.apply(null, array);
  
}
else {
  return 0;
}

}
 

exports.max = function max (array) {
  let result;
  if (array && array.length)
{
 result = Math.max.apply(null, array);
}
else {
  return 0;
}

  return  result;
}

exports.avg = function avg (array) {
  if (array && array.length)
  {
  return array.reduce((a,b) => a+b, 0)/array.length;
}
else {
  return 0;
}

}
