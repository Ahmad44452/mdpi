import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer__citation">
        <p className="footer__citation--text">Sensors, EISSN 1424-8220, Published by MDPI </p>
        <div className="footer__citation--tags">
          <span className="footer__citation--tags-item">RSS</span>
          <span className="footer__citation--tags-item">CONTENT ALER</span>
        </div>
      </div>

      <div className='footer__main'>
        <div className='footer__newsletter'>
          <img src='/images/logo.png' className='footer__newsletter--img' />
          <p className='footer__newsletter--text'>Subscribe to receive issue release notifications and newsletters from MDPI journals</p>
          <div className='footer__newsletter--input'>
            <span className='footer__newsletter--input-icon'>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9188 7.37598L11.2161 10.3868C10.5165 10.9418 9.5322 10.9418 8.83262 10.3868L5.09863 7.37598" stroke="#D2D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.091 17.5C16.6255 17.507 18.3337 15.4246 18.3337 12.8653V7.14168C18.3337 4.58235 16.6255 2.5 14.091 2.5H5.90961C3.37515 2.5 1.66699 4.58235 1.66699 7.14168V12.8653C1.66699 15.4246 3.37515 17.507 5.90961 17.5H14.091Z" stroke="#D2D2D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>

            <input type='email' placeholder='Enter your email' />
          </div>
          <button className='footer__newsletter--btn'>Subscribe</button>
        </div>

        <div className='footer__links'>
          <div className='footer__links--group'>
            <h3 className='footer__links--group-title'>
              Further Information
            </h3>
            <Link to={'/'} className='footer__links--group-item'>Articel Processing Charges</Link>
            <Link to={'/'} className='footer__links--group-item'>Pay an invoice</Link>
            <Link to={'/'} className='footer__links--group-item'>Open access policy</Link>
            <Link to={'/'} className='footer__links--group-item'>Contact MDPI</Link>
            <Link to={'/'} className='footer__links--group-item'>Jobs at MDPI</Link>
          </div>


          <div className='footer__links--group'>
            <h3 className='footer__links--group-title'>
              Guidelines
            </h3>
            <Link to={'/'} className='footer__links--group-item'>For Authors</Link>
            <Link to={'/'} className='footer__links--group-item'>For reviewers</Link>
            <Link to={'/'} className='footer__links--group-item'>For Editors</Link>
            <Link to={'/'} className='footer__links--group-item'>For Librarians</Link>
            <Link to={'/'} className='footer__links--group-item'>For Publishers</Link>
            <Link to={'/'} className='footer__links--group-item'>For Societies</Link>
            <Link to={'/'} className='footer__links--group-item'>For Conference Organizers</Link>
          </div>


          <div className='footer__links--group'>
            <h3 className='footer__links--group-title'>
              MDPI Initiatives
            </h3>
            <Link to={'/'} className='footer__links--group-item'>Sciforum</Link>
            <Link to={'/'} className='footer__links--group-item'>MDPI Books</Link>
            <Link to={'/'} className='footer__links--group-item'>Preprints</Link>
            <Link to={'/'} className='footer__links--group-item'>Scilit</Link>
            <Link to={'/'} className='footer__links--group-item'>Sciprofiles</Link>
            <Link to={'/'} className='footer__links--group-item'>Encyclopedia</Link>
            <Link to={'/'} className='footer__links--group-item'>JAMS</Link>
            <Link to={'/'} className='footer__links--group-item'>Proceedings Series</Link>
          </div>


          <div className='footer__links--group'>
            <h3 className='footer__links--group-title'>
              Follow MDPI
            </h3>
            <Link to={'/'} className='footer__links--group-item'>LinedIn</Link>
            <Link to={'/'} className='footer__links--group-item'>Facebook</Link>
            <Link to={'/'} className='footer__links--group-item'>Twitter</Link>
            <Link to={'/'} className='footer__links--group-item'>MDPI</Link>
          </div>

        </div>


      </div>

    </div>

  )
}

export default Footer;