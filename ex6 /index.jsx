import React from 'react'
import Family from './Familly'
import Member from './Member'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Family>
      <Member name="Mateus" lastName="Silva" />
      <Member name="Bruno" lastName="Silva" />
      <Member name="Fausto" lastName="Silva" />
      <Member name="Silvio" lastName="Silva" />
      <Member name="Santos" lastName="Silva" />
      <Member name="Salazar" lastName="Silva" />
  </Family>,document.getElementById('app')
)