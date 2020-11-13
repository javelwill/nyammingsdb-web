import React from 'react'
import './Stats.css'

const Stats = () => {
  return (
    <div className='stats'>
      <div className='container container--stats'>
        
        <div className='stats__all'>
          <div className='stats__single'>
            <i className='stats__icon fas fa-paper-plane fa-3x'></i>
            <h3 className='stats__number'>15,000</h3>
            <p className='stats__title'>Requests Served</p>
          </div>
          <div className='stats__single'>
            <i className='stats__icon fas fa-user-friends fa-3x'></i>
            <h3 className='stats__number'>200</h3>
            <p className='stats__title'>Users</p>
          </div>
          <div className='stats__single'>
            <i className='stats__icon fas fa-utensils fa-3x'></i>
            <h3 className='stats__number'>100</h3>
            <p className='stats__title'>Food Establishments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
