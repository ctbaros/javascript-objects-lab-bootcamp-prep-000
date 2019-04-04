var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return objectassign ({}, object, { [key]: value})
}