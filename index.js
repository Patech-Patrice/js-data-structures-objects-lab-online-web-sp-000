const driver = {
"name": "Sam",
"address": "11 Broadway",
};


function updateDriverWithKeyAndValue(driver, key, value){
  var Copy = Object.assign({}, driver, {[key]: value});
  return Copy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}
}