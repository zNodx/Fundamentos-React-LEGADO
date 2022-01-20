import React from 'react'
import Family from './Familly'
import Member from './Member'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Family lastName="Silva">
      <Member name="Mateus"/>
      <Member name="Marcola"/>
      <Member name="Juju"/>
      <Member name="Sasuke"/>
  </Family>,document.getElementById('app')
)