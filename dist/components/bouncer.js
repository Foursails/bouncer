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
//# sourceMappingURL=data:application/json;base64,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QUN2QixnQkFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO0FBQzFCLGtCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQixNQUFNO0FBQ0wsa0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNyQixrQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7QUFDRCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUM5Qjs7O2VBckJVLG1CQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2JvdW5jZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT0RFUyA9IHtcbiAgJ2V4YWN0JzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGBeJHthfSRgLCAnaScpLnRlc3QoYiksXG4gICdzdGFydHNXaXRoJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGBeJHthfWAsICdpJykudGVzdChiKSxcbiAgJ2VuZHNXaXRoJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGAke2F9JGAsICdpJykudGVzdChiKSxcbiAgJ2NvbnRhaW5zJzogKGEpID0+IChiKSA9PiBuZXcgUmVnRXhwKGAke2F9YCwgJ2knKS50ZXN0KGIpLFxuICAnPj0nOiAoYSkgPT4gKGIpID0+IGIgPj0gYSxcbiAgJz4nOiAoYSkgPT4gKGIpID0+IGIgPiBhLFxuICAnPD0nOiAoYSkgPT4gKGIpID0+IGIgPD0gYSxcbiAgJzwnOiAoYSkgPT4gKGIpID0+IGIgPCBhLFxuICAnPT0nOiAoYSkgPT4gKGIpID0+IGIgPT0gYVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcoYXJyYXksIG9wdHMpIHtcbiAgXG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGaWx0ZXIgaXMgaW5jb3JyZWN0bHkgY29uZmlndXJlZC4gTm8gZmlsdGVyIHdpbGwgYmUgYXBwbGllZC5cIilcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdHMudmFsdWUpIHtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHByb3BzO1xuICAgIGlmIChvcHRzLm9uKSB7XG4gICAgICBwcm9wcyA9IG9wdHMub24gaW5zdGFuY2VvZiBBcnJheSA/IG9wdHMub24gOiBbb3B0cy5vbl07XG4gICAgfSBcbiAgICB2YXIgdmFscyA9IG9wdHMudmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IG9wdHMudmFsdWUgOiBbb3B0cy52YWx1ZV07XG4gICAgdmFyIG1vZGU7XG4gICAgaWYgKHR5cGVvZihvcHRzLm1vZGUpID09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1vZGUgPSAnY3VzdG9tJztcbiAgICB9IGVsc2UgaWYgKG9wdHMubW9kZSkge1xuICAgICAgbW9kZSA9IG9wdHMubW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kZSA9ICdjb250YWlucyc7XG4gICAgfVxuICAgIHZhciBtZXRob2QgPSAob3B0cy5zdHJpY3QgPT0gZmFsc2UgJiYgdmFscy5sZW5ndGgpID8gJ3NvbWUnIDogJ2V2ZXJ5JztcblxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHsgXG4gICAgICByZXR1cm4gdmFsc1ttZXRob2RdKCh2YWwpID0+IHtcbiAgICAgICAgdmFyIHRlc3QgPSAobW9kZSA9PSAnY3VzdG9tJyA/IG9wdHMubW9kZS5iaW5kKHVuZGVmaW5lZCwgdmFsKSA6IE1PREVTW21vZGVdKHZhbCkpO1xuICAgICAgICByZXR1cm4gcHJvcHMgPyBwcm9wcy5zb21lKChwcm9wKSA9PiB0ZXN0KGl0ZW1bcHJvcF0pKSA6IHRlc3QoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BsaXRWYWx1ZUNvbnZlcnRlciB7XG4gIF9hcnI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2FyciA9IFtdO1xuICB9XG4gIGZyb21WaWV3KHN0cmluZywgdG9rZW4gPSAnICcpIHtcbiAgICB0aGlzLl9hcnIubGVuZ3RoID0gMDtcbiAgICB2YXIgc3RyaW5ncyA9IHN0cmluZy50b1N0cmluZygpLnNwbGl0KHRva2VuKTtcbiAgICB3aGlsZSAoc3RyaW5ncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2Fyci5wdXNoKHN0cmluZ3MucG9wKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXJyO1xuICB9XG4gIHRvVmlldyhhcnJheSwgdG9rZW4gPSAnICcpIHtcbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5fYXJyID0gYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Fyci5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5fYXJyLnB1c2goYXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXJyLmpvaW4odG9rZW4pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
