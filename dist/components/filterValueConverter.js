System.register([], function (_export) {
  'use strict';

  var MODES, FilterValueConverter, SplitValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      MODES = {
        'exact': function exact(a) {
          return function (b) {
            return new RegExp('^' + a + '$', 'i').test(b);
          };
        },
        'startsWith': function startsWith(a) {
          return function (b) {
            return new RegExp('^' + a, 'i').test(b);
          };
        },
        'endsWith': function endsWith(a) {
          return function (b) {
            return new RegExp(a + '$', 'i').test(b);
          };
        },
        'contains': function contains(a) {
          return function (b) {
            return new RegExp('' + a, 'i').test(b);
          };
        },
        '>=': function _(a) {
          return function (b) {
            return b >= a;
          };
        },
        '>': function _(a) {
          return function (b) {
            return b > a;
          };
        },
        '<=': function _(a) {
          return function (b) {
            return b <= a;
          };
        },
        '<': function _(a) {
          return function (b) {
            return b < a;
          };
        },
        '==': function _(a) {
          return function (b) {
            return b == a;
          };
        }
      };

      FilterValueConverter = (function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        _createClass(FilterValueConverter, [{
          key: 'toView',
          value: function toView(array, opts) {

            if (!opts) {
              console.warn("Filter is incorrectly configured. No filter will be applied.");
              return array;
            }

            if (!opts.value) {
              return array;
            }

            var props;
            if (opts.on) {
              props = opts.on instanceof Array ? opts.on : [opts.on];
            }
            var vals = opts.value instanceof Array ? opts.value : [opts.value];
            var mode;
            if (typeof opts.mode == 'function') {
              mode = 'custom';
            } else if (opts.mode) {
              mode = opts.mode;
            } else {
              mode = 'contains';
            }
            var method = opts.strict == false && vals.length ? 'some' : 'every';

            return array.filter(function (item) {
              return vals[method](function (val) {
                var test = mode == 'custom' ? opts.mode.bind(undefined, val) : MODES[mode](val);
                return props ? props.some(function (prop) {
                  return test(item[prop]);
                }) : test(item);
              });
            });
          }
        }]);

        return FilterValueConverter;
      })();

      _export('FilterValueConverter', FilterValueConverter);

      SplitValueConverter = (function () {
        function SplitValueConverter() {
          _classCallCheck(this, SplitValueConverter);

          this._arr = [];
        }

        _createClass(SplitValueConverter, [{
          key: 'fromView',
          value: function fromView(string) {
            var token = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];

            this._arr.length = 0;
            var strings = string.toString().split(token);
            while (strings.length) {
              this._arr.push(strings.pop());
            }
            return this._arr;
          }
        }, {
          key: 'toView',
          value: function toView(array) {
            var token = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];

            if (array instanceof Array) {
              this._arr = array;
            } else {
              this._arr.length = 0;
              this._arr.push(array);
            }
            return this._arr.join(token);
          }
        }]);

        return SplitValueConverter;
      })();

      _export('SplitValueConverter', SplitValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVyVmFsdWVDb252ZXJ0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQU0sS0FBSyxFQVlFLG9CQUFvQixFQW9DcEIsbUJBQW1COzs7Ozs7Ozs7QUFoRDFCLFdBQUssR0FBRztBQUNaLGVBQU8sRUFBRSxlQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLElBQUksTUFBTSxPQUFLLENBQUMsUUFBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1dBQUE7U0FBQTtBQUN4RCxvQkFBWSxFQUFFLG9CQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLElBQUksTUFBTSxPQUFLLENBQUMsRUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1dBQUE7U0FBQTtBQUM1RCxrQkFBVSxFQUFFLGtCQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLElBQUksTUFBTSxDQUFJLENBQUMsUUFBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1dBQUE7U0FBQTtBQUMxRCxrQkFBVSxFQUFFLGtCQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLElBQUksTUFBTSxNQUFJLENBQUMsRUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1dBQUE7U0FBQTtBQUN6RCxZQUFJLEVBQUUsV0FBQyxDQUFDO2lCQUFLLFVBQUMsQ0FBQzttQkFBSyxDQUFDLElBQUksQ0FBQztXQUFBO1NBQUE7QUFDMUIsV0FBRyxFQUFFLFdBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7V0FBQTtTQUFBO0FBQ3hCLFlBQUksRUFBRSxXQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLENBQUMsSUFBSSxDQUFDO1dBQUE7U0FBQTtBQUMxQixXQUFHLEVBQUUsV0FBQyxDQUFDO2lCQUFLLFVBQUMsQ0FBQzttQkFBSyxDQUFDLEdB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eURBQUcsR0FBRzs7QUFDdkIsZ0JBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtBQUMxQixrQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDbkIsTUFBTTtBQUNMLGtCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckIsa0JBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO0FBQ0QsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDOUI7OztlQXJCVSxtQkFBbUIiLCJmaWxlIjoiY29tcG9uZW50cy9maWx0ZXJWYWx1ZUNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1PREVTID0ge1xuICAnZXhhY3QnOiAoYSkgPT4gKGIpID0+IG5ldyBSZWdFeHAoYF4ke2F9JGAsICdpJykudGVzdChiKSxcbiAgJ3N0YXJ0c1dpdGgnOiAoYSkgPT4gKGIpID0+IG5ldyBSZWdFeHAoYF4ke2F9YCwgJ2knKS50ZXN0KGIpLFxuICAnZW5kc1dpdGgnOiAoYSkgPT4gKGIpID0+IG5ldyBSZWdFeHAoYCR7YX0kYCwgJ2knKS50ZXN0KGIpLFxuICAnY29udGFpbnMnOiAoYSkgPT4gKGIpID0+IG5ldyBSZWdFeHAoYCR7YX1gLCAnaScpLnRlc3QoYiksXG4gICc+PSc6IChhKSA9PiAoYikgPT4gYiA+PSBhLFxuICAnPic6IChhKSA9PiAoYikgPT4gYiA+IGEsXG4gICc8PSc6IChhKSA9PiAoYikgPT4gYiA8PSBhLFxuICAnPCc6IChhKSA9PiAoYikgPT4gYiA8IGEsXG4gICc9PSc6IChhKSA9PiAoYikgPT4gYiA9PSBhXG59XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyhhcnJheSwgb3B0cykge1xuICBcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZpbHRlciBpcyBpbmNvcnJlY3RseSBjb25maWd1cmVkLiBObyBmaWx0ZXIgd2lsbCBiZSBhcHBsaWVkLlwiKVxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGlmICghb3B0cy52YWx1ZSkge1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICB2YXIgcHJvcHM7XG4gICAgaWYgKG9wdHMub24pIHtcbiAgICAgIHByb3BzID0gb3B0cy5vbiBpbnN0YW5jZW9mIEFycmF5ID8gb3B0cy5vbiA6IFtvcHRzLm9uXTtcbiAgICB9IFxuICAgIHZhciB2YWxzID0gb3B0cy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gb3B0cy52YWx1ZSA6IFtvcHRzLnZhbHVlXTtcbiAgICB2YXIgbW9kZTtcbiAgICBpZiAodHlwZW9mKG9wdHMubW9kZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbW9kZSA9ICdjdXN0b20nO1xuICAgIH0gZWxzZSBpZiAob3B0cy5tb2RlKSB7XG4gICAgICBtb2RlID0gb3B0cy5tb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RlID0gJ2NvbnRhaW5zJztcbiAgICB9XG4gICAgdmFyIG1ldGhvZCA9IChvcHRzLnN0cmljdCA9PSBmYWxzZSAmJiB2YWxzLmxlbmd0aCkgPyAnc29tZScgOiAnZXZlcnknO1xuXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbSkgPT4geyBcbiAgICAgIHJldHVybiB2YWxzW21ldGhvZF0oKHZhbCkgPT4ge1xuICAgICAgICB2YXIgdGVzdCA9IChtb2RlID09ICdjdXN0b20nID8gb3B0cy5tb2RlLmJpbmQodW5kZWZpbmVkLCB2YWwpIDogTU9ERVNbbW9kZV0odmFsKSk7XG4gICAgICAgIHJldHVybiBwcm9wcyA/IHByb3BzLnNvbWUoKHByb3ApID0+IHRlc3QoaXRlbVtwcm9wXSkpIDogdGVzdChpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdFZhbHVlQ29udmVydGVyIHtcbiAgX2FycjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYXJyID0gW107XG4gIH1cbiAgZnJvbVZpZXcoc3RyaW5nLCB0b2tlbiA9ICcgJykge1xuICAgIHRoaXMuX2Fyci5sZW5ndGggPSAwO1xuICAgIHZhciBzdHJpbmdzID0gc3RyaW5nLnRvU3RyaW5nKCkuc3BsaXQodG9rZW4pO1xuICAgIHdoaWxlIChzdHJpbmdzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fYXJyLnB1c2goc3RyaW5ncy5wb3AoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcnI7XG4gIH1cbiAgdG9WaWV3KGFycmF5LCB0b2tlbiA9ICcgJykge1xuICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0aGlzLl9hcnIgPSBhcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXJyLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLl9hcnIucHVzaChhcnJheSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcnIuam9pbih0b2tlbik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
