
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 // object[key] = value;
  object.assign({}, {key: value});
  return object;
}