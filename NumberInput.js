/**
  * @yaireo/react-number-input - 
  *
  * @version v1.0.4
  * @homepage https://yaireo.github.io/react-number-input
  */

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _shape;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberInput = function NumberInput(_ref) {
  var inputMode = _ref.inputMode,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      defaultValue = _ref.defaultValue,
      localeOptions = _ref.localeOptions,
      rest = _objectWithoutProperties(_ref, ["inputMode", "onChange", "onFocus", "onBlur", "defaultValue", "localeOptions"]);

  var _useState = (0, _react.useState)(+defaultValue || ''),
      _useState2 = _slicedToArray(_useState, 2),
      lastValue = _useState2[0],
      setLastValue = _useState2[1];

  var _useState3 = (0, _react.useState)(+defaultValue || ''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)('number'),
      _useState6 = _slicedToArray(_useState5, 2),
      type = _useState6[0],
      setType = _useState6[1];

  (0, _react.useEffect)(function () {
    numberToText();
  }, []);

  function textToNumber(field) {
    setType('number');
    setValue(lastValue);
  }

  function numberToText(field) {
    setType('');
    setLastValue(value);
    setValue(value == '' ? '' : (+value).toLocaleString(undefined, localeOptions));
  }

  function onFocusLocal(e) {
    textToNumber(e.target);
    onFocus && onFocus(e);
  }

  function onBlurLocal(e) {
    numberToText(e.target);
    onBlur && onBlur(e);
  }

  function onChangeLocal(e) {
    setValue(e.target.value);
    onChange && onChange(e);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, rest), {}, {
    type: type,
    value: value,
    inputMode: inputMode || 'decimal',
    onChange: onChangeLocal,
    onFocus: onFocusLocal,
    onBlur: onBlurLocal
  }));
};

NumberInput.propTypes = {
  className: _propTypes.string,
  placeholder: _propTypes.string,
  name: _propTypes.string,
  inputMode: _propTypes.string,
  onChange: _propTypes.func,
  defaultValue: _propTypes.number,
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
  localeOptions: (0, _propTypes.shape)((_shape = {
    maximumFractionDigits: _propTypes.number,
    minimumSignificantDigits: _propTypes.number,
    maximumSignificantDigits: _propTypes.number,
    style: _propTypes.object,
    numberingSystem: _propTypes.string,
    currencySign: _propTypes.string,
    currency: _propTypes.string,
    unit: _propTypes.string
  }, _defineProperty(_shape, "style", (0, _propTypes.oneOf)(['decimal', 'currency', 'percent', 'unit'])), _defineProperty(_shape, "unitDisplay", (0, _propTypes.oneOf)(['long', 'short', 'narrow'])), _defineProperty(_shape, "currencyDisplay", (0, _propTypes.oneOf)(['symbol', 'narrowSymbol', 'code', 'name'])), _defineProperty(_shape, "notation", (0, _propTypes.oneOf)(['standard', 'scientific', 'engineering', 'compact'])), _defineProperty(_shape, "signDisplay", (0, _propTypes.oneOf)(['auto', 'never', 'always', 'exceptZero'])), _shape))
};
var _default = NumberInput;
exports["default"] = _default;

//# sourceMappingURL=NumberInput.js.map