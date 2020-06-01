import assignValue from './assignValue.js'
import baseAssignValue from './baseAssignValue.js'

/**
 *将“源”的属性复制到“对象”。
 *
 *@私人的
 *@param {Object}源从中复制属性的对象。
 *@param {Array} props要复制的属性标识符。
 *@param {Object} [object = {}]复制属性的对象。
 *@param {Function} [customizer]用于自定义复制值的函数。
 *@returns {Object}返回`object`。
 */ 
function copyObject(source, props, object, customizer) {
  const isNew = !object
  object || (object = {})

  for (const key of props) {
    let newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined

    if (newValue === undefined) {
      newValue = source[key]
    }
    if (isNew) {
      baseAssignValue(object, key, newValue)
    } else {
      assignValue(object, key, newValue)
    }
  }
  return object
}

export default copyObject
