const MODES = {
  'exact': (a) => (b) => new RegExp(`^${a}$`, 'i').test(b),
  'startsWith': (a) => (b) => new RegExp(`^${a}`, 'i').test(b),
  'endsWith': (a) => (b) => new RegExp(`${a}$`, 'i').test(b),
  'contains': (a) => (b) => new RegExp(`${a}`, 'i').test(b),
  '>=': (a) => (b) => b >= a,
  '>': (a) => (b) => b > a,
  '<=': (a) => (b) => b <= a,
  '<': (a) => (b) => b < a,
  '==': (a) => (b) => b == a
}

export class FilterValueConverter {
  constructor(binding) {
    this.binding = binding;
  }
  toView(array, opts) {
  
    if (!opts) {
      console.warn("Filter is incorrectly configured. No filter will be applied.")
      return array;
    }

    if (!opts.value) {
      return array;
    }
    
    var props;
    if (opts.on) {
      props = opts.on instanceof Array ? props = opts.on : props = [opts.on];
    } 
    var vals = opts.value instanceof Array ? opts.value : [opts.value];
    var mode;
    if (typeof(opts.mode) == 'function') {
      mode = 'custom';
    } else if (opts.mode) {
      mode = opts.mode;
    } else {
      mode = 'contains';
    }
    var method = (opts.strict == false && vals.length) ? 'some' : 'every';

    return array.filter((item) => { 
      return vals[method]((val) => {
        var test = (mode == 'custom' ? opts.mode.bind(undefined, val) : MODES[mode](val));
        return props ? props.some((prop) => test(item[prop])) : test(item);
      });
    });
  }
}

export class SplitValueConverter {
  _arr;
  constructor() {
    this._arr = [];
  }
  fromView(string, token = ' ') {
    this._arr.length = 0;
    var strings = string.toString().split(token);
    while (strings.length) {
      this._arr.push(strings.pop());
    }
    return this._arr;
  }
  toView(array, token = ' ') {
    if (array instanceof Array) {
      this._arr = array;
    } else {
      this._arr.length = 0;
      this._arr.push(array);
    }
    return this._arr.join(token);
  }
}
