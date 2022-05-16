import React from 'react'
import Data from './Data'
import Place from './Place'

export default function Places() {
  let area = Data.map((item) => {
    return (
      <div>
        <Place key={item.id} {...item} />
      </div>
    )
  })
  return <div className='places'>{area}</div>
}
