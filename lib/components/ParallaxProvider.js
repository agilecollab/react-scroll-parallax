'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ParallaxController = require('../libs/ParallaxController');

var _ParallaxController2 = _interopRequireDefault(_ParallaxController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParallaxProvider = function (_Component) {
    _inherits(ParallaxProvider, _Component);

    function ParallaxProvider() {
        _classCallCheck(this, ParallaxProvider);

        return _possibleConstructorReturn(this, (ParallaxProvider.__proto__ || Object.getPrototypeOf(ParallaxProvider)).apply(this, arguments));
    }

    _createClass(ParallaxProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            // Passes down the reference to the controller
            var parallaxController = this.parallaxController;

            return { parallaxController: parallaxController };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // Don't initialize on the server
            var isServer = typeof window === 'undefined';

            if (!isServer) {
                // Must not be the server so kick it off...
                this.parallaxController = _ParallaxController2.default.init();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.parallaxController) {
                // Remove scroll and resize listener if the provider is unmounted
                this.parallaxController.destroy();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return children;
        }
    }]);

    return ParallaxProvider;
}(_react.Component);

ParallaxProvider.propTypes = {
    children: _propTypes2.default.node.isRequired
};
ParallaxProvider.childContextTypes = {
    parallaxController: _propTypes2.default.object
};
exports.default = ParallaxProvider;
module.exports = exports['default'];