'use strict';
module.exports = function() {
  var warehouse = {};
  function _setValue(theKey,theValue) {
    warehouse[theKey] = theValue;
  }
  function _getValue(theKey){
    if(warehouse[theKey] === undefined){
      return null;
    } else {
      return warehouse[theKey];
    }
  }
  return {
    setValue: _setValue,
    getValue: _getValue
  };
};