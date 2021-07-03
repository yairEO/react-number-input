/**
  * @yaireo/react-number-input - 
  *
  * @version v1.1.1
  * @homepage https://yaireo.github.io/react-number-input
  */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NumberInput = ({
  inputMode,
  onChange,
  onFocus,
  onBlur,
  defaultValue,
  localeOptions,
  ...rest
}) => {
  const [lastValue, setLastValue] = (0, _react.useState)(+defaultValue || '');
  const [value, setValue] = (0, _react.useState)(+defaultValue || '');
  const [type, setType] = (0, _react.useState)('number');
  const isMounted = (0, _react.useRef)();
  const inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (isMounted.current) {
      numberToText(+defaultValue);
    }
  }, [defaultValue]);
  (0, _react.useEffect)(() => {
    numberToText();
    isMounted.current = true;
  }, []);

  function textToNumber() {
    setType('number');
    setValue(lastValue);
  }

  function numberToText(num = value) {
    setType('');
    setLastValue(num || '');
    setValue(num == '' ? '' : (+num).toLocaleString(undefined, localeOptions));
  }

  function onFocusLocal(e) {
    textToNumber();
    onFocus && onFocus(e);
  }

  function onBlurLocal(e) {
    numberToText();
    onBlur && onBlur(e);
  }

  function onChangeLocal() {
    setValue(inputRef.current.value);
    onChange && onChange(inputRef.current);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", { ...rest,
    ref: inputRef,
    type: type,
    value: value,
    inputMode: inputMode || 'decimal',
    onChange: onChangeLocal,
    onFocus: onFocusLocal,
    onBlur: onBlurLocal
  });
};

NumberInput.propTypes = {
  className: _propTypes.string,
  placeholder: _propTypes.string,
  name: _propTypes.string,
  inputMode: _propTypes.string,
  onChange: _propTypes.func,
  defaultValue: _propTypes.number,
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
  localeOptions: (0, _propTypes.shape)({
    maximumFractionDigits: _propTypes.number,
    minimumSignificantDigits: _propTypes.number,
    maximumSignificantDigits: _propTypes.number,
    style: _propTypes.object,
    numberingSystem: _propTypes.string,
    currencySign: _propTypes.string,
    currency: _propTypes.string,
    unit: _propTypes.string,
    style: (0, _propTypes.oneOf)(['decimal', 'currency', 'percent', 'unit']),
    unitDisplay: (0, _propTypes.oneOf)(['long', 'short', 'narrow']),
    currencyDisplay: (0, _propTypes.oneOf)(['symbol', 'narrowSymbol', 'code', 'name']),
    notation: (0, _propTypes.oneOf)(['standard', 'scientific', 'engineering', 'compact']),
    signDisplay: (0, _propTypes.oneOf)(['auto', 'never', 'always', 'exceptZero'])
  })
};
var _default = NumberInput;
exports.default = _default;

//# sourceMappingURL=NumberInput.js.map