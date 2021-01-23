import React, { useEffect, useState } from 'react'
import {string, number, func, shape, oneOf, object} from 'prop-types'

const NumberInput = ({ className, style, placeholder, name, inputMode, onChange, defaultValue, localeOptions }) => {
  const [lastValue, setLastValue] = useState(defaultValue||'')
  const [value, setValue] = useState(+defaultValue||'')
  const [type, setType] = useState('number')

  useEffect(() => {
    numberToText()
  }, [])

  function textToNumber(field){
    setType('number')
    setValue(lastValue)
  }

  function numberToText(field){
    setType('')
    setLastValue(value)
    setValue( value == '' ? '' : (+value).toLocaleString(undefined, localeOptions) )
  }

  function onFocus(e){
    textToNumber(e.target)
  }

  function onBlur(e){
    numberToText(e.target)
  }

  function onChangeLocal(e){
    setValue(e.target.value)
    onChange && onChange(e)
  }

  return <input className={className}
    style={style}
    type={type}
    name={name}
    value={value}
    inputMode={inputMode || 'decimal'}
    placeholder={placeholder}
    onChange={onChangeLocal}
    onFocus={onFocus}
    onBlur={onBlur} />
}

NumberInput.propTypes = {
  className    : string,
  placeholder  : string,
  name         : string,
  inputMode    : string,
  onChange     : func,
  defaultValue : number,

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
  localeOptions: shape({
    maximumFractionDigits   : number,
    minimumSignificantDigits: number,
    maximumSignificantDigits: number,
    style                   : object,
    numberingSystem         : string,
    currencySign            : string,
    currency                : string,
    unit                    : string,
    style                   : oneOf(['decimal', 'currency', 'percent', 'unit']),
    unitDisplay             : oneOf(['long', 'short', 'narrow']),
    currencyDisplay         : oneOf(['symbol', 'narrowSymbol', 'code', 'name']),
    notation                : oneOf(['standard', 'scientific', 'engineering', 'compact']),
    signDisplay             : oneOf(['auto', 'never', 'always', 'exceptZero']),
  })
}

export default NumberInput