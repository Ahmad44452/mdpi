import { Link } from "react-router-dom";
import { GoCalendar } from 'react-icons/go';

import perrreviewweekimg from './peerreviewweekimg.png';

import './styles.scss';

const Newsbox = () => {
  return (
    <div className="newsbox">
      <h3 className="newsbox__heading">
        News
      </h3>

      <div className="newsbox__news">
        <div className="newsbox__news--item">
          <Link to='/' className="newsbox__news--item-link">Sensors | Promotional Video</Link>
          <div className="newsbox__news--item-date">
            <span>
              <GoCalendar />
            </span>
            8 October, 2022
          </div>
        </div>


        <div className="newsbox__news--item">
          <Link to='/' className="newsbox__news--item-link">Peer Review Week 2022 – Research Integrity: Creating and Supporting Trust in Research.</Link>
          <div className="newsbox__news--item-date">
            <span>
              <GoCalendar />
            </span>
            29 September, 2022
          </div>
          <img className="newsbox__news--item-img" src={perrreviewweekimg} />
        </div>


        <div className="newsbox__news--item">
          <Link to='/' className="newsbox__news--item-link">Sensors | Top 10 Cited Papers in 2020–2021 in the Section “Chemical Sensors”</Link>
          <div className="newsbox__news--item-date">
            <span>
              <GoCalendar />
            </span>
            2 October, 2022
          </div>
        </div>


      </div>

      <Link to={'/'} className="newsbox__more">More News & Announcements</Link>

    </div>
  )
}

export default Newsbox;