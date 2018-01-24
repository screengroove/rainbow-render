import React from 'react'
import { convertNumberToEnglish } from './utils'
import Leaf from './leaf'

const computeHSLRainbowColor = (n, period) =>
  `hsl(${Math.round((n / period) * 360)},100%,50%)`

export const rowHeight = 150

export const renderRowAtIndex = (index) => (
  <div
    className="list-item"
    style={{
      height: rowHeight,
      color: computeHSLRainbowColor(index, 100),
      fontSize: 24,
      padding: '5px 10px'
    }}
  >
    <Leaf color={computeHSLRainbowColor(index, 100)}/>
    {convertNumberToEnglish(index + 1)}
  </div>
)