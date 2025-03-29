import PropTypes from 'prop-types'
import React from 'react'

export const CounterApp = ({value}) => {
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{value}</h2>
    </>
  )
}


CounterApp.prototype = {
    value: PropTypes.number
}