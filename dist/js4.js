'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Rule = (function () {
  function Rule(selector) {
    var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, Rule);

    this.selector = selector;
    this.attributes = attributes;
    this.options = options;

    rules.push(this);
  }

  _createClass(Rule, [{
    key: 'output',
    value: function output(prop, val) {
      var ret = '';

      if (typeof val === 'string') {
        ret += '  ' + prop + ': ' + val + ';\n';
      } else if (typeof val === 'object') {
        for (var _prop in val) {
          ret += this.output(_prop, val[_prop]);
        }
      }

      return ret;
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this.options.render === false) {
        return '';
      }

      var output = this.selector + ' {\n';

      for (var rule in this.attributes) {
        output += this.output(rule, this.attributes[rule]);
      }

      output += '}';

      return output;
    }
  }]);

  return Rule;
})();

exports['default'] = Rule;
module.exports = exports['default'];