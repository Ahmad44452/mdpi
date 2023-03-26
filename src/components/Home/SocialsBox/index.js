import './styles.scss';
import sensorimg from './sensorImg.png';

import { BsFillShareFill } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';


const SocialsBox = () => {
  return (
    <div className="socialsbox">
      <img className='socialsbox__img' src={sensorimg} />

      <div>
        <button className='socialsbox__button socialsbox__button--solid'>Submit to <span>Sensors</span></button>
        <button className='socialsbox__button socialsbox__button--shallow'>review for <span>Sensors</span></button>
      </div>

      <div className='socialsbox__networks'>
        <a className='socialsbox__networks--link' href='https://www.google.com'>
          <BsFillShareFill />
        </a>

        <a className='socialsbox__networks--link' href='https://www.google.com'>
          <AiFillInstagram />
        </a>

        <a className='socialsbox__networks--link' href='https://www.google.com'>
          <AiOutlineTwitter />
        </a>

        <a className='socialsbox__networks--link' href='https://www.google.com'>
          <FaFacebookF />
        </a>
      </div>


    </div>
  )
}

export default SocialsBox;