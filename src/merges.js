import { isArray, union, partialRight, mergeWith } from 'lodash'

// Array concat
let merge = (...args) => {
  function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
  let defaults = partialRight(mergeWith, customizer);
  return defaults.apply(defaults, args)
}

// Array set
let mergeSet = (...args) => {
  function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
      return union(objValue, srcValue);
    }
  }
  let defaults = partialRight(mergeWith, customizer);
  return defaults.apply(defaults, args)
}

export {
  merge,
  mergeSet
}
