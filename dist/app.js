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
            this.title = 'Final';
            this.platforms.length = 0;
            this.name.length = 0;
            this.name.push("George");
            this.random = false;
            this.until = new Date('2000-01-01');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7WUFHYSxHQUFHLEVBZ0NILDBCQUEwQjs7Ozs7Ozs7Ozs7QUFoQzFCLFNBQUc7QUFhSCxpQkFiQSxHQUFHLENBYUYsT0FBTyxFQUFFO2dDQWJWLEdBQUc7O2VBTWQsU0FBUyxHQUFHLEVBQUU7ZUFFZCxJQUFJLEdBQUcsRUFBRTs7QUFNUCxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUIsZ0JBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuQzs7cUJBaEJVLEdBQUc7O2lCQWtCTixvQkFBRztBQUNULGdCQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNyQixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztXQUNyQzs7O2lCQUVZLHVCQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDekIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztXQUM3Qjs7O2VBN0JVLEdBQUc7Ozs7O0FBZ0NILGdDQUEwQjtpQkFBMUIsMEJBQTBCO2dDQUExQiwwQkFBMEI7OztxQkFBMUIsMEJBQTBCOztpQkFDN0Isa0JBQUMsR0FBRyxFQUFFO0FBQ1osbUJBQU8sQUFBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUksSUFBSSxJQUFJLFlBQVUsR0FBRyxDQUFHLEdBQUcsR0FBRyxDQUFDO1dBQ2xFOzs7aUJBQ0ssZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsbUJBQU8sR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsR0FBRyxDQUFDO1dBQ3pEOzs7ZUFOVSwwQkFBMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IERBVEEgZnJvbSAnZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGdhbWVzO1xuICBwcmVzaWRlbnRzO1xuXG4gIHRpdGxlO1xuICBwbGF0Zm9ybXMgPSBbXTsgXG5cbiAgbmFtZSA9IFtdO1xuICBmcm9tO1xuICB1bnRpbDtcbiAgcmFuZG9tO1xuXG4gIGNvbnN0cnVjdG9yKGJpbmRpbmcpIHsgXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBEQVRBKTtcbiAgICB3aW5kb3cucGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnRpdGxlID0gJ0ZpbmFsJztcbiAgICB0aGlzLnBsYXRmb3Jtcy5sZW5ndGggPSAwO1xuICAgIHRoaXMubmFtZS5sZW5ndGggPSAwO1xuICAgIHRoaXMubmFtZS5wdXNoKFwiR2VvcmdlXCIpO1xuICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgdGhpcy51bnRpbCA9IG5ldyBEYXRlKCcyMDAwLTAxLTAxJyk7XG4gIH1cblxuICBkZWNpZGVPbkFXaGltKHZhbHVlLCBpdGVtKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjk1O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlRnJvbVllYXJWYWx1ZUNvbnZlcnRlciB7XG4gIGZyb21WaWV3KHZhbCkge1xuICAgIHJldHVybiAodmFsICYmIHZhbC5sZW5ndGggPT0gNCkgPyBuZXcgRGF0ZShgMDEvMDEvJHt2YWx9YCkgOiB2YWw7XG4gIH1cbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBEYXRlID8gdmFsLmdldFVUQ0Z1bGxZZWFyKCkgOiB2YWw7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
