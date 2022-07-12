import React from 'react'

function Main(props) {
  return (
    <div className='travel'>
        <div className='div-img'>
          <img src='./img/Japan.jpg' alt='travel-place' />
        </div>

        <div className='content-travel'>
          <div className='location'>
            <div className='location-place'>
              <i class="ri-map-pin-line"></i>
              <p>Japan</p>
            </div>

            <a className='google-map' href='#'>View on Google Maps</a>
          </div>

          <h1 className='title-travel'>Mount Fuji</h1>

          <div className='date'>
            <p>
              <span>12 Jan, 2021</span>
              - 
              <span>24 Jan, 2021</span>
            </p>
          </div>

          <div className='description'>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
          </div>
        </div>
    </div>
  )
}

export default Main