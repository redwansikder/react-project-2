import React from 'react'

export default function Place({
  img,
  title,
  location,
  start_date,
  end_date,
  description,
  times,
}) {
  return (
    <div>
      <div className='place--container'>
        {times === 2 && <div className='times'>{times} times</div>}
        <div className='place--img'>
          <img src={img} alt={location} />
        </div>

        <div className='place--details'>
          <div className='place--location c'>
            <img
              src='../images/location.jpg'
              alt=''
              className='location--pin'
            />
            <p>{location}</p>
          </div>
          <h1>{title}</h1>
          <p className='date c'>
            {start_date} - {end_date}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
