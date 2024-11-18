jQuery = {
  extend(): 对象扩展，
  expando: 每一个jQ的唯一标识,
  isReady: true,
  error: 抛出异常,
  noop(),
  isFunction(),
  isArray(),
  isWindow(),
  isNumeric()
  isPlainObject()
  isEmptyObject()
  type()
  globalEval(): script执行,
  camelCase:(),
  nodeName(), //内部方法吧这个
  each(),
  trim(),
  makeArray(),
  inArray(),
  merge(),
  grep(),
  map(),
  //GUID
  guid:1,
	proxy(),
  now: Date.now,
  support,
  //选择器相关
  find: Sizzle,
  expr: Sizzle.selectors 表达式
  uniqueSort：Sizzle.uniqueSort
  unique：Sizzle.uniqueSort
  text：Sizzle.getText
  isXMLDoc：Sizzle.isXML
  contains：Sizzle.contains
  //
  filter
  Callbacks，
  Deferred
  when
  event:{}
}

jQuery.prototype = {
  //1. 初始化时候，重新定义了jQuery的原型对象
  jquery: 获取版本号,
  constructor: 构造函数, 重新修正
  selector: 选择器,
  length: 选中的个数,
  toArray(): Array.prototype.slice.call(this),
  get(num): 根据索引获取指定元素,
  pushStack():?,
  each():?,
  map():?,
  slice():?,
  first():?,
  last():?,
  eq():,
  end():,
  push(): Array.prototype.push,
  splice(): [].splice,
  sort(): [].sort,
  extend():同jQuery.extend,
  [Symbol.iterator]: [][Symbol.iterator],
  find,
  filter,
  not,
  is,
  init,
  has
  closest
  index
  add,
  addBaack,
  //dom节点
  parent
  parents
  parentsUntil
  next
  prev
  nextAll
  prevAll
  nextUntil
  prevUntil
  siblings
  children
  contents
  ready
}