import './styles.scss'
import HeaderCard from './HeaderCard';

const HomeHeader = () => {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__info--left">
          JOURNALS / SENSORS
        </div>

        <div className="header__info--right">
          <div className="header__info--box header__info--box-yellow">Impact Factor: <span>3.847</span></div>
          <div className="header__info--box header__info--box-blue">Indexed In: <span>PubMed</span></div>
        </div>
      </div>
      <div className="header__cards">
        <HeaderCard title='Topics' destination={'/'} icon={<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.6666 21.6667V30C41.6666 38.3333 38.3333 41.6667 29.9999 41.6667H19.9999C11.6666 41.6667 8.33325 38.3333 8.33325 30V20C8.33325 11.6667 11.6666 8.33334 19.9999 8.33334H28.3333" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M41.6666 21.6667H34.9999C29.9999 21.6667 28.3333 20 28.3333 15V8.33334L41.6666 21.6667Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.6667 26.6667H26.6667" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.6667 33.3333H23.3334" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>} />

        <HeaderCard title='Latest Books' destination={'/'} icon={<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.6666 7.78334V27.9C36.6666 29.5 35.3666 31 33.7666 31.2L33.2166 31.2667C29.5832 31.7501 23.9832 33.6 20.7832 35.3667C20.3499 35.6167 19.6333 35.6167 19.1833 35.3667L19.1165 35.3334C15.9165 33.5834 10.3333 31.7501 6.71663 31.2667L6.23324 31.2C4.63324 31 3.33325 29.5 3.33325 27.9V7.76666C3.33325 5.78332 4.94987 4.28334 6.93321 4.45001C10.4332 4.73334 15.7332 6.50005 18.6999 8.35005L19.1165 8.59999C19.5999 8.89999 20.4 8.89999 20.8833 8.59999L21.1666 8.41668C22.2166 7.76668 23.5499 7.11667 24.9999 6.53334V13.3334L28.3333 11.1167L31.6666 13.3334V4.63342C32.1166 4.55008 32.55 4.50002 32.95 4.46669H33.0499C35.0333 4.30002 36.6666 5.78334 36.6666 7.78334Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 9.14999V34.15" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.6667 4.63338V13.3333L28.3333 11.1166L25 13.3333V6.53331C27.1833 5.66664 29.6167 4.96672 31.6667 4.63338Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        } />

        <HeaderCard title='Top Articles' destination={'/'} icon={<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 11.6667V28.3333C35 33.3333 32.5 36.6667 26.6667 36.6667H13.3333C7.5 36.6667 5 33.3333 5 28.3333V11.6667C5 6.66667 7.5 3.33334 13.3333 3.33334H26.6667C32.5 3.33334 35 6.66667 35 11.6667Z" stroke="#223B5E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M25.8334 3.33334V16.4333C25.8334 17.1666 24.9667 17.5333 24.4334 17.05L20.5668 13.4834C20.2501 13.1834 19.75 13.1834 19.4334 13.4834L15.5668 17.05C15.0335 17.5333 14.1667 17.1666 14.1667 16.4333V3.33334H25.8334Z" stroke="#223B5E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22.0833 23.3333H29.1666" stroke="#223B5E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 30H29.1667" stroke="#223B5E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        } />

        <HeaderCard title='Conferences' destination={'/'} icon={<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 11.9333C29.9 11.9167 29.7834 11.9167 29.6834 11.9333C27.3834 11.85 25.55 9.96667 25.55 7.63334C25.55 5.25001 27.4667 3.33334 29.85 3.33334C32.2334 3.33334 34.15 5.26667 34.15 7.63334C34.1334 9.96667 32.3 11.85 30 11.9333Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M28.2834 24.0667C30.5667 24.45 33.0834 24.05 34.8501 22.8667C37.2001 21.3 37.2001 18.7334 34.8501 17.1667C33.0667 15.9834 30.5167 15.5833 28.2334 15.9833" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.94981 11.9333C10.0498 11.9167 10.1665 11.9167 10.2665 11.9333C12.5665 11.85 14.3998 9.96667 14.3998 7.63334C14.3998 5.25001 12.4831 3.33334 10.0998 3.33334C7.71647 3.33334 5.7998 5.26667 5.7998 7.63334C5.81647 9.96667 7.64981 11.85 9.94981 11.9333Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.6666 24.0667C9.38323 24.45 6.86657 24.05 5.0999 22.8667C2.7499 21.3 2.7499 18.7334 5.0999 17.1667C6.88324 15.9834 9.43323 15.5833 11.7166 15.9833" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 24.3833C19.9 24.3667 19.7834 24.3667 19.6834 24.3833C17.3834 24.3 15.55 22.4167 15.55 20.0833C15.55 17.7 17.4667 15.7833 19.85 15.7833C22.2334 15.7833 24.15 17.7167 24.15 20.0833C24.1334 22.4167 22.3 24.3167 20 24.3833Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.15 29.6333C12.8 31.2 12.8 33.7667 15.15 35.3333C17.8166 37.1167 22.1833 37.1167 24.85 35.3333C27.2 33.7667 27.2 31.2 24.85 29.6333C22.2 27.8667 17.8166 27.8667 15.15 29.6333Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        } />

        <HeaderCard title='Special Issues' destination={'/'} icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12.9167V21.6667" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M35.1335 14.3001V25.7C35.1335 27.5667 34.1335 29.3001 32.5168 30.2501L22.6168 35.9667C21.0002 36.9001 19.0001 36.9001 17.3668 35.9667L7.46678 30.2501C5.85011 29.3167 4.8501 27.5833 4.8501 25.7V14.3001C4.8501 12.4334 5.85011 10.7 7.46678 9.74999L17.3668 4.03334C18.9834 3.1 20.9835 3.1 22.6168 4.03334L32.5168 9.74999C34.1335 10.7 35.1335 12.4167 35.1335 14.3001Z" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 27V27.1667" stroke="#223B5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        } />
      </div>
    </div>
  )
}

export default HomeHeader;