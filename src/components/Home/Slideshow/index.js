import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './styles.scss';

const HomeSlideShow = () => {
  return (
    <div className="slideshow">
      <Carousel showArrows={true} swipeable={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src="/images/slideshow/image1.png" />
          <p className="legend">High-Speed Infrared Radiation Thermometer for the Investigation of Early Stage Explosive Development and Fireball Expansion.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1679652848213-f343e84abaa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <p className="legend">High-Speed Infrared Radiation Thermometer for the Investigation of Early Stage Explosive Development and Fireball Expansion.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1679598018476-3987536a45fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <p className="legend">High-Speed Infrared Radiation Thermometer for the Investigation of Early Stage Explosive Development and Fireball Expansion.</p>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeSlideShow;