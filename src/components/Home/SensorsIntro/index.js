import { HiMenuAlt2, HiOutlineDownload } from 'react-icons/hi';
import { AiOutlineUnlock } from 'react-icons/ai';

import './styles.scss';

const SensorsIntro = () => {
  return (
    <div className="sensorsintro">
      <h2 className="sensorsintro__title">Sensors</h2>
      <div className="sensorsintro__content">
        <div className="sensorsintro__content--description">
          Sensors is the leading international, peer-reviewed, open access journal on the science and technology of sensors. Sensors is published semimonthly online by MDPI.
          The Polish Society of Applied Electromagnetics (PTZE), Japan Society of Photogrammetry and Remote Sensing (JSPRS), Spanish Society of Biomedical Engineering (SEIB) and
          International Society for the Measurement of Physical Behaviour (ISMPB) are affiliated with Sensors and their members receive a discount on the article processing charges.
        </div>

        <div className='sensorsintro__content--list'>
          <li>
            Open Access: <span>free for readers, with article processing charges (APC) paid by authors or their institutions.</span>
          </li>

          <li>High Visibility: <span>indexed within Scopus, SCIE (Web of Science), PubMed, MEDLINE, PMC, Embase, Ei Compendex, Inspec, Astrophysics Data System, and other
            databases.</span></li>

          <li>Journal Rank: <span>JCR - Q2 (Instruments & Instrumentation) / CiteScore - Q1 (Instrumentation)</span></li>

          <li>Rapid Publication: <span>manuscripts are peer-reviewed and a first decision provided to authors approximately 16.2 days after submission; acceptance to publication
            is undertaken in 2.8 days (median values for papers published in this journal in the first half of 2022).</span></li>

          <li>Recognition of Reviewers: <span>reviewers who provide timely, thorough peer-review reports receive vouchers entitling them to a discount on the APC of their
            next publication in any MDPI journal, in appreciation of the work done.</span></li>

          <li>Sections: <span>published in 25 topical sections.</span></li>


          <li>Testimonials: <span>See what our editors and authors say about Sensors.</span></li>

          <li>Companion journals for Sensors include: <span>Chips, Automation and JCP.</span></li>

        </div>
      </div>

      <div className='sensorsintro__additional'>
        <div className='sensorsintro__additional--item'>
          <span className='sensorsintro__additional--item-icon'>
            <HiMenuAlt2 />
          </span>
          <span className='sensorsintro__additional--item-text'>
            Imprint Information
          </span>
        </div>

        <div className='sensorsintro__additional--item'>
          <span className='sensorsintro__additional--item-icon'>
            <HiOutlineDownload />
          </span>
          <span className='sensorsintro__additional--item-text'>
            Journal Flyer
          </span>
        </div>

        <div className='sensorsintro__additional--item'>
          <span className='sensorsintro__additional--item-icon'>
            <AiOutlineUnlock />
          </span>
          <span className='sensorsintro__additional--item-text'>
            Open Access
          </span>
        </div>

        <div className='sensorsintro__additional--item'>
          <span className='sensorsintro__additional--item-icon'>
            ISSN:
          </span>
          <span className='sensorsintro__additional--item-text'>
            1424-8220
          </span>
        </div>
      </div>

    </div>
  )
}

export default SensorsIntro;