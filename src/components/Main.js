import React from 'react'

function Main(props) {
  return (
    <div className='travel'>
        <div className='div-img'>
          <img src={props.img} alt='travel-place' />
        </div>

        <div className='content-travel'>
          <div className='location'>
            <div className='location-place'>
              <i class="ri-map-pin-line"></i>
              <p>{props.location}</p>
            </div>

            <a className='google-map' href='#'>{props.googleMaps}</a>
          </div>

          <h1 className='title-travel'>{props.title}</h1>

          <div className='date'>
            <p>
              <span>{props.startDate}</span>
              - 
              <span>{props.endDate}</span>
            </p>
          </div>

          <div className='description'>
            {props.description}
          </div>
        </div>
    </div>
  )
}

export default Main