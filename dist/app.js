System.register(['bootstrap', 'data'], function (_export) {
  'use strict';

  var DATA, App, DateFromYearValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_data) {
      DATA = _data['default'];
    }],
    execute: function () {
      App = (function () {
        function App(binding) {
          _classCallCheck(this, App);

          this.platforms = [];
          this.name = [];

          Object.assign(this, DATA);
          window.platforms = this.platforms;
        }

        _createClass(App, [{
          key: 'activate',
          value: function activate() {
            this.title = '';
            this.platforms.length = 0;
            this.name.length = 0;
            this.random = false;
          }
        }, {
          key: 'decideOnAWhim',
          value: function decideOnAWhim(value, item) {
            return Math.random() > 0.95;
          }
        }]);

        return App;
      })();

      _export('App', App);

      DateFromYearValueConverter = (function () {
        function DateFromYearValueConverter() {
          _classCallCheck(this, DateFromYearValueConverter);
        }

        _createClass(DateFromYearValueConverter, [{
          key: 'fromView',
          value: function fromView(val) {
            return val && val.length == 4 ? new Date('01/01/' + val) : val;
          }
        }, {
          key: 'toView',
          value: function toView(val) {
            return val instanceof Date ? val.getUTCFullYear() : val;
          }
        }]);

        return DateFromYearValueConverter;
      })();

      _export('DateFromYearValueConverter', DateFromYearValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7WUFHYSxHQUFHLEVBOEJILDBCQUEwQjs7Ozs7Ozs7Ozs7QUE5QjFCLFNBQUc7QUFhSCxpQkFiQSxHQUFHLENBYUYsT0FBTyxFQUFFO2dDQWJWLEdBQUc7O2VBTWQsU0FBUyxHQUFHLEVBQUU7ZUFFZCxJQUFJLEdBQUcsRUFBRTs7QUFNUCxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUIsZ0JBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuQzs7cUJBaEJVLEdBQUc7O2lCQWtCTixvQkFBRztBQUNULGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1dBQ3JCOzs7aUJBRVksdUJBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QixtQkFBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1dBQzdCOzs7ZUEzQlUsR0FBRzs7Ozs7QUE4QkgsZ0NBQTBCO2lCQUExQiwwQkFBMEI7Z0NBQTFCLDBCQUEwQjs7O3FCQUExQiwwQkFBMEI7O2lCQUM3QixrQkFBQyxHQUFHLEVBQUU7QUFDWixtQkFBTyxBQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBSSxJQUFJLElBQUksWUFBVSxHQUFHLENBQUcsR0FBRyxHQUFHLENBQUM7V0FDbEU7OztpQkFDSyxnQkFBQyxHQUFHLEVBQUU7QUFDVixtQkFBTyxHQUFHLFlBQVksSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLENBQUM7V0FDekQ7OztlQU5VLDBCQUEwQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgREFUQSBmcm9tICdkYXRhJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgZ2FtZXM7XG4gIHByZXNpZGVudHM7XG5cbiAgdGl0bGU7XG4gIHBsYXRmb3JtcyA9IFtdOyBcblxuICBuYW1lID0gW107XG4gIGZyb207XG4gIHVudGlsO1xuICByYW5kb207XG5cbiAgY29uc3RydWN0b3IoYmluZGluZykgeyBcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIERBVEEpO1xuICAgIHdpbmRvdy5wbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB0aGlzLnBsYXRmb3Jtcy5sZW5ndGggPSAwO1xuICAgIHRoaXMubmFtZS5sZW5ndGggPSAwO1xuICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gIH1cblxuICBkZWNpZGVPbkFXaGltKHZhbHVlLCBpdGVtKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjk1O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlRnJvbVllYXJWYWx1ZUNvbnZlcnRlciB7XG4gIGZyb21WaWV3KHZhbCkge1xuICAgIHJldHVybiAodmFsICYmIHZhbC5sZW5ndGggPT0gNCkgPyBuZXcgRGF0ZShgMDEvMDEvJHt2YWx9YCkgOiB2YWw7XG4gIH1cbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBEYXRlID8gdmFsLmdldFVUQ0Z1bGxZZWFyKCkgOiB2YWw7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
