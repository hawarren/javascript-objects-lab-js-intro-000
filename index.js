
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 // object[key] = value;
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  //var newObject = object;
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}


function destructivelyDeleteFromObjectByKey(object, key){
  var newObject = object;
  delete newObject[key];
  return newObject;
}