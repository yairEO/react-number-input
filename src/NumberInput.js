import React, { useEffect, useState, useRef } from 'react'
import {string, number, func, shape, oneOf, object} from 'prop-types'

const NumberInput = ({ inputMode, onChange, onFocus, onBlur, defaultValue, localeOptions, ...rest }) => {
  const [lastValue, setLastValue] = useState(+defaultValue||'')
  const [value, setValue] = useState(+defaultValue||'')
  const [type, setType] = useState('number')
  const isMounted = useRef()
  const inputRef = useRef(null)

  useEffect(() => {
    if( isMounted.current ){
      numberToText(+defaultValue)
    }
  }, [defaultValue])

  useEffect(() => {
    numberToText()
    isMounted.current = true
  }, [])

  function textToNumber(){
    setType('number')
    setValue(lastValue)
  }

  function numberToText( num = value ){
    setType('')
    setLastValue(num||'')
    setValue( num == '' ? '' : (+num).toLocaleString(undefined, localeOptions) )
  }

  function onFocusLocal(e){
    textToNumber()
    onFocus && onFocus(e)
  }

  function onBlurLocal(e){
    numberToText()
    onBlur && onBlur(e)
  }

  function onChangeLocal(){
    setValue(inputRef.current.value)
    onChange && onChange(inputRef.current)
  }

  return <input {...rest}
    ref={inputRef}
    type={type}
    value={value}
    inputMode={inputMode || 'decimal'}
    onChange={onChangeLocal}
    onFocus={onFocusLocal}
    onBlur={onBlurLocal} />
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