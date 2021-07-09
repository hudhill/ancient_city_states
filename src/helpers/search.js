const search = function(property, value){
  return this.cityStateList.filter(cityStateItem => cityStateItem[property] === value);
}

module.exports = search;