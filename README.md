<p align="center">
  <a href='https://yaireo.github.io/react-number-input/'>
    <img src="./demo.gif?sanitize=true" alt="converts input type number to locale string and back"/>
  </a>
<p>


<p align="center">
  <a href='https://www.npmjs.com/package/@yaireo/react-number-input'>
      <img src="https://badgen.net/npm/v/@yaireo/react-number-input" />
  </a>
  <img src="https://badgen.net/bundlephobia/minzip/@yaireo/react-number-input" />
  <img src="https://badgen.net/npm/dw/@yaireo/react-number-input" />
</p>

<h1 align="center">
  React number-input component
</h1>

Converts an `<input type"number">` to a nicely-printed locale-based string when the input field
has no focus, and when it receives focus, the input field reverts back to type `number` so it could be edited easily.

Supports **currency** transformation (AKA *money*) based on [Number.prototype.toLocaleString](https://stackoverflow.com/a/54534797/104380).


<br>

## Install

    npm i @yaireo/react-number-input

## Use (with currency)

```js
<NumberInput localeOptions={{ maximumFractionDigits:2, currency:"USD", style:"currency", currencyDisplay:"symbol" }} />
```


## Props

Prop                    | Type                      | Default     | Info
----------------------- | ------------------------- |:-----------:| -------------------------------------------------
className               | `string`                  |             |
style                   | `string`                  |             |
placeholder             | `string`                  |             |
name                    | `string`                  |             |
inputMode               | `string`                  |`"decimal"`  | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
onChange                | `function`                |             |
defaultValue            | `number`                  | `""`        |
localeOptions           | `Object`                  |             | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)