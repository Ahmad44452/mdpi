import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderCard = ({ icon, title, destination }) => {
  return (
    <div className="header__card">
      <div className="header__card--top">
        <span className="header__card--icon">
          {
            icon
          }
        </span>
        <Link to={destination} className="header__card--button">
          Explore <span><BsArrowRight /></span>
        </Link>
      </div>
      <div className="header__card--title">
        {title}
      </div>

    </div>
  )
}

export default HeaderCard;