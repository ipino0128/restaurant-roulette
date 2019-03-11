import React from 'react'

const Carousel = () => {
  return(
    <div className = "Carousel">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="1500" pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://blogs-images.forbes.com/karlaalindahao/files/2017/12/Upland_Best-Restaurants-in-America_OpenTable-2017-1200x675.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/3MCOATcLcpry7_8WhXHM4hHHrd4=/0x0:4032x3024/1200x800/filters:focal(1662x1169:2306x1813)/cdn.vox-cdn.com/uploads/chorus_image/image/52262299/IMG_0722.0.jpeg" alt="Second slide"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel
