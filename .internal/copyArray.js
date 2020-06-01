/**
 *将source的值复制到array中。
 *
 *@私人的
 *@param {Array} source要从中复制值的数组。
 *@param {Array} [array = []]将值复制到的数组。
 *@returns {Array}返回`array`。
 */ 
function copyArray(source, array) {
  let index = -1 //初始化数据
  const length = source.length // 保存长度
  array || (array = new Array(length)) // array目标数组若不存在,重新新建数组 [empty]
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

export default copyArray
