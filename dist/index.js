'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsitemReport = exports.NewsitemVideo = exports.NewsitemPhoto = exports.NewsitemGallery = exports.Newsitem = exports.Newsitems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _piousboxRender = require('piousbox-render');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Meta, Panel } from '../../piousbox-render/src/index'

var Newsitems = function (_React$Component) {
  _inherits(Newsitems, _React$Component);

  function Newsitems() {
    _classCallCheck(this, Newsitems);

    return _possibleConstructorReturn(this, (Newsitems.__proto__ || Object.getPrototypeOf(Newsitems)).apply(this, arguments));
  }

  _createClass(Newsitems, [{
    key: 'render',
    value: function render() {
      // console.log('+++ Newsitems render', this.props, this.state)
      if (!this.props.items) {
        return null;
      }
      var newsitems = [];
      var idx = 0;
      this.props.items.map(function (i) {
        if (i.item_type === 'report') {
          newsitems.push(_react2.default.createElement(
            'div',
            { key: idx++ },
            _react2.default.createElement(NewsitemReport, { item: i })
          ));
        } else if (i.item_type === 'gallery') {
          // newsitems.push(<div key={idx++}><NewsitemGallery item={i} /></div>)
        } else if (i.item_type === 'video') {
          // newsitems.push(<div key={idx++}><NewsitemVideo item={i} /></div>)
        } else if (i.item_type === 'photo') {
          // newsitems.push(<div key={idx++}><NewsitemPhoto item={i} /></div>)
        }
      });
      return _react2.default.createElement(
        'div',
        null,
        newsitems,
        ' '
      );
    }
  }]);

  return Newsitems;
}(_react2.default.Component);

var Newsitem = function (_React$Component2) {
  _inherits(Newsitem, _React$Component2);

  function Newsitem() {
    _classCallCheck(this, Newsitem);

    return _possibleConstructorReturn(this, (Newsitem.__proto__ || Object.getPrototypeOf(Newsitem)).apply(this, arguments));
  }

  _createClass(Newsitem, [{
    key: 'render',
    value: function render() {
      console.log('+++ Newsitem render');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          this.props.item.name
        )
      );
    }
  }]);

  return Newsitem;
}(_react2.default.Component);

var NewsitemGallery = function (_React$Component3) {
  _inherits(NewsitemGallery, _React$Component3);

  function NewsitemGallery() {
    _classCallCheck(this, NewsitemGallery);

    return _possibleConstructorReturn(this, (NewsitemGallery.__proto__ || Object.getPrototypeOf(NewsitemGallery)).apply(this, arguments));
  }

  _createClass(NewsitemGallery, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemGallery render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitemGallery'
      );
    }
  }]);

  return NewsitemGallery;
}(_react2.default.Component);

var NewsitemPhoto = function (_React$Component4) {
  _inherits(NewsitemPhoto, _React$Component4);

  function NewsitemPhoto() {
    _classCallCheck(this, NewsitemPhoto);

    return _possibleConstructorReturn(this, (NewsitemPhoto.__proto__ || Object.getPrototypeOf(NewsitemPhoto)).apply(this, arguments));
  }

  _createClass(NewsitemPhoto, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemPhoto render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitemPhoto'
      );
    }
  }]);

  return NewsitemPhoto;
}(_react2.default.Component);

var NewsitemVideo = function (_React$Component5) {
  _inherits(NewsitemVideo, _React$Component5);

  function NewsitemVideo() {
    _classCallCheck(this, NewsitemVideo);

    return _possibleConstructorReturn(this, (NewsitemVideo.__proto__ || Object.getPrototypeOf(NewsitemVideo)).apply(this, arguments));
  }

  _createClass(NewsitemVideo, [{
    key: 'render',
    value: function render() {
      // console.log('+++ NewsitemVideo render', this.props, this.state)

      var linkPath = '/en/videos/show/' + this.props.item.youtube_id; // @TODO: abstract
      return _react2.default.createElement(
        'div',
        { className: 'dropShadow' },
        _react2.default.createElement(
          'div',
          { className: 'inner' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: linkPath },
            _react2.default.createElement('img', { src: 'https://img.youtube.com/vi/' + this.props.item.youtube_id + '/0.jpg', width: '100%', alt: '' })
          ),
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: linkPath },
              this.props.item.name
            )
          ),
          _react2.default.createElement(_piousboxRender.Meta, { item: this.props.item })
        )
      );
    }
  }]);

  return NewsitemVideo;
}(_react2.default.Component);

var NewsitemReport = function (_React$Component6) {
  _inherits(NewsitemReport, _React$Component6);

  function NewsitemReport() {
    _classCallCheck(this, NewsitemReport);

    return _possibleConstructorReturn(this, (NewsitemReport.__proto__ || Object.getPrototypeOf(NewsitemReport)).apply(this, arguments));
  }

  _createClass(NewsitemReport, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemReport:', this.props, this.state);
      console.log('+++ panel:', _piousboxRender.Panel);

      if (!this.props.item) {
        return null;
      }

      return _react2.default.createElement(
        _piousboxRender.Panel,
        null,
        _react2.default.createElement(
          'h2',
          null,
          this.props.item.name
        ),
        _react2.default.createElement(_piousboxRender.Meta, { item: this.props.item })
      );
    }
  }]);

  return NewsitemReport;
}(_react2.default.Component);

exports.Newsitems = Newsitems;
exports.Newsitem = Newsitem;
exports.NewsitemGallery = NewsitemGallery;
exports.NewsitemPhoto = NewsitemPhoto;
exports.NewsitemVideo = NewsitemVideo;
exports.NewsitemReport = NewsitemReport;
