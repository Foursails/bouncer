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
        function FilterValueConverter(binding) {
          _classCallCheck(this, FilterValueConverter);

          this.binding = binding;
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
              props = opts.on instanceof Array ? props = opts.on : props = [opts.on];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm91bmNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTSxLQUFLLEVBWUUsb0JBQW9CLEVBdUNwQixtQkFBbUI7Ozs7Ozs7OztBQW5EMUIsV0FBSyxHQUFHO0FBQ1osZUFBTyxFQUFFLGVBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssSUFBSSxNQUFNLE9BQUssQ0FBQyxRQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7V0FBQTtTQUFBO0FBQ3hELG9CQUFZLEVBQUUsb0JBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssSUFBSSxNQUFNLE9BQUssQ0FBQyxFQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7V0FBQTtTQUFBO0FBQzVELGtCQUFVLEVBQUUsa0JBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssSUFBSSxNQUFNLENBQUksQ0FBQyxRQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7V0FBQTtTQUFBO0FBQzFELGtCQUFVLEVBQUUsa0JBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssSUFBSSxNQUFNLE1BQUksQ0FBQyxFQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7V0FBQTtTQUFBO0FBQ3pELFlBQUksRUFBRSxXQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLENBQUMsSUFBSSxDQUFDO1dBQUE7U0FBQTtBQUMxQixXQUFHLEVBQUUsV0FBQyxDQUFDO2lCQUFLLFVBQUMsQ0FBQzttQkFBSyxDQUFDLEdBQUcsQ0FBQztXQUFBO1NBQUE7QUFDeEIsWUFBSSxFQUFFLFdBQUMsQ0FBQztpQkFBSyxVQUFDLENBQUM7bUJBQUssQ0FBQyxJQUFJLENBQUM7V0FBQTtTQUFBO0FBQzFCLFdBQUcsRUFBRSxXQUFDLENBQUM7aUJBQUssVUFBQyxDQUFDO21CQUFLLENBQUMsR0FBRyxDQUFDO1dBQUE7U0FBQTtBQUN4QixZQUFJLEVBQUUsV0FBQyxDQUFDO2lCQUFLLFVBQUMsQ0FBQzttQkFBSyxDQUFDLElBQUksQ0FBQztXQUFBO1NBQUE7T0FDM0I7O0FBRVksMEJBQW9CO0FBQ3BCLGlCQURBLG9CQUFvQixDQUNuQixPQUFPLEVBQUU7Z0NBRFYsb0JBQW9COztBQUU3QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSFUsb0JBQW9COztpQkFJekIsZ0JBQUMsS0FBSyxFQUFFLElBQUksRUFBRTs7QUFFbEIsZ0JBQUksQ0FBQyxJQUFJLEVBQUU7QUFDVCxxQkFBTyxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFBO0FBQzVFLHFCQUFPLEtBQUssQ0FBQzthQUNkOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLHFCQUFPLEtBQUssQ0FBQzthQUNkOztBQUVELGdCQUFJLEtBQUssQ0FBQztBQUNWLGdCQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDWCxtQkFBSyxHQUFHLElBQUksQ0FBQyxFQUFFLFlBQVksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN4RTtBQUNELGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxZQUFZLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25FLGdCQUFJLElBQUksQ0FBQztBQUNULGdCQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQUFBQyxJQUFJLFVBQVUsRUFBRTtBQUNuQyxrQkFBSSxHQUFHLFFBQVEsQ0FBQzthQUNqQixNQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixrQkFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsTUFBTTtBQUNMLGtCQUFJLEdBQUcsVUFBVSxDQUFDO2FBQ25CO0FBQ0QsZ0JBQUksTUFBTSxHQUFHLEFBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBSSxNQUFNLEdBQUcsT0FBTyxDQUFDOztBQUV0RSxtQkFBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQzVCLHFCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUMzQixvQkFBSSxJQUFJLEdBQUksSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7QUFDbEYsdUJBQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3lCQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUNwRSxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7V0FDSjs7O2VBcENVLG9CQUFvQjs7Ozs7QUF1Q3BCLHlCQUFtQjtBQUVuQixpQkFGQSxtQkFBbUIsR0FFaEI7Z0NBRkgsbUJBQW1COztBQUc1QixjQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNoQjs7cUJBSlUsbUJBQW1COztpQkFLdEIsa0JBQUMsTUFBTSxFQUFlO2dCQUFiLEtBQUsseURBQUcsR0FBRzs7QUFDMUIsZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNyQixnQkFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxtQkFBTyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3JCLGtCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUMvQjtBQUNELG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7OztpQkFDSyxnQkFBQyxLQUFLLEVBQWU7Z0JBQWIsS0FBSyx5REFBRyxHQUFHOztBQUN2QixnQkFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO0FBQzFCLGtCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQixNQUFNO0FBQ0wsa0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNyQixrQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7QUFDRCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUM5Qjs7O2VBckJVLG1CQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2JvdW5jZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT0RFUyA9IHtcbiAgJ2V4YWN0JzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGBeJHthfSRgLCAnaScpLnRlc3QoYiksXG4gICdzdGFydHNXaXRoJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGBeJHthfWAsICdpJykudGVzdChiKSxcbiAgJ2VuZHNXaXRoJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGAke2F9JGAsICdpJykudGVzdChiKSxcbiAgJ2NvbnRhaW5zJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGAke2F9YCwgJ2knKS50ZXN0KGIpLFxuICAnPj0nOiAoYSkgPT4gKGIpID0+IGIgPj0gYSxcbiAgJz4nOiAoYSkgPT4gKGIpID0+IGIgPiBhLFxuICAnPD0nOiAoYSkgPT4gKGIpID0+IGIgPD0gYSxcbiAgJzwnOiAoYSkgPT4gKGIpID0+IGIgPCBhLFxuICAnPT0nOiAoYSkgPT4gKGIpID0+IGIgPT0gYVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb252ZXJ0ZXIge1xuICBjb25zdHJ1Y3RvcihiaW5kaW5nKSB7XG4gICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgfVxuICB0b1ZpZXcoYXJyYXksIG9wdHMpIHtcbiAgXG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGaWx0ZXIgaXMgaW5jb3JyZWN0bHkgY29uZmlndXJlZC4gTm8gZmlsdGVyIHdpbGwgYmUgYXBwbGllZC5cIilcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdHMudmFsdWUpIHtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHByb3BzO1xuICAgIGlmIChvcHRzLm9uKSB7XG4gICAgICBwcm9wcyA9IG9wdHMub24gaW5zdGFuY2VvZiBBcnJheSA/IHByb3BzID0gb3B0cy5vbiA6IHByb3BzID0gW29wdHMub25dO1xuICAgIH0gXG4gICAgdmFyIHZhbHMgPSBvcHRzLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyBvcHRzLnZhbHVlIDogW29wdHMudmFsdWVdO1xuICAgIHZhciBtb2RlO1xuICAgIGlmICh0eXBlb2Yob3B0cy5tb2RlKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtb2RlID0gJ2N1c3RvbSc7XG4gICAgfSBlbHNlIGlmIChvcHRzLm1vZGUpIHtcbiAgICAgIG1vZGUgPSBvcHRzLm1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGUgPSAnY29udGFpbnMnO1xuICAgIH1cbiAgICB2YXIgbWV0aG9kID0gKG9wdHMuc3RyaWN0ID09IGZhbHNlICYmIHZhbHMubGVuZ3RoKSA/ICdzb21lJyA6ICdldmVyeSc7XG5cbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7IFxuICAgICAgcmV0dXJuIHZhbHNbbWV0aG9kXSgodmFsKSA9PiB7XG4gICAgICAgIHZhciB0ZXN0ID0gKG1vZGUgPT0gJ2N1c3RvbScgPyBvcHRzLm1vZGUuYmluZCh1bmRlZmluZWQsIHZhbCkgOiBNT0RFU1ttb2RlXSh2YWwpKTtcbiAgICAgICAgcmV0dXJuIHByb3BzID8gcHJvcHMuc29tZSgocHJvcCkgPT4gdGVzdChpdGVtW3Byb3BdKSkgOiB0ZXN0KGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwbGl0VmFsdWVDb252ZXJ0ZXIge1xuICBfYXJyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hcnIgPSBbXTtcbiAgfVxuICBmcm9tVmlldyhzdHJpbmcsIHRva2VuID0gJyAnKSB7XG4gICAgdGhpcy5fYXJyLmxlbmd0aCA9IDA7XG4gICAgdmFyIHN0cmluZ3MgPSBzdHJpbmcudG9TdHJpbmcoKS5zcGxpdCh0b2tlbik7XG4gICAgd2hpbGUgKHN0cmluZ3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9hcnIucHVzaChzdHJpbmdzLnBvcCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FycjtcbiAgfVxuICB0b1ZpZXcoYXJyYXksIHRva2VuID0gJyAnKSB7XG4gICAgaWYgKGFycmF5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuX2FyciA9IGFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcnIubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuX2Fyci5wdXNoKGFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Fyci5qb2luKHRva2VuKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
