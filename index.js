const driver = {
"name": "Sam",
"address": "11 Broadway",
};


function updateDriverWithKeyAndValue(driver, key, value){
  var Copy = Object.assign({}, driver, {[key]: value});
  return Copy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  obj[name,address] = value;
  return 'Sam', '12 Broadway';
}
