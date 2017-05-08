const types = {
  isPrototype(data) {
    return Object.prototype.toString.call(data).toLowerCase()
  },

  isArray(data) {
    return this.isPrototype(data) === '[object array]'
  },

  isFunction(data) {
    return this.isPrototype(data) === '[object function]'
  },

  isString(data) {
    return this.isPrototype(data) === '[object string]'
  },

  isNumber(data) {
    return this.isPrototype(data) === '[object number]'
  },

  isUndefined(data) {
    return this.isPrototype(data) === '[object undefined]'
  },

  isNull(data) {
    return this.isPrototype(data) === '[object null]'
  }

}

module.exports = types