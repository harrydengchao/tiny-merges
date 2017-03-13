import _ from 'lodash'

// Array concat
let merge = (...args) => {
  function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
  let defaults = _.partialRight(_.mergeWith, customizer);
  return defaults.apply(defaults, args)
}

// Array set
let mergeSet = (...args) => {
  function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return _.union(objValue, srcValue);
    }
  }
  let defaults = _.partialRight(_.mergeWith, customizer);
  return defaults.apply(defaults, args)
}

export {
  merge,
  mergeSet
}
