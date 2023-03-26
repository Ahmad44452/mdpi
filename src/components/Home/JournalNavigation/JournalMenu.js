import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JournalMenuItem = ({ to, children }) => {
  return <li className='journalmenu__links--item'>
    <Link to={to}>{children}</Link>
  </li>
}


const JournalMenu = () => {
  return (
    <div className="journalmenu">
      <div className="journalmenu__header">
        <span className="journalmenu__header--icon"> <FiMenu /></span>
        <h3 className="journalmenu__header--title">Journal Menu</h3>
      </div>
      <ul className='journalmenu__links'>
        <JournalMenuItem to={'/'}>Sensors Home</JournalMenuItem>
        <JournalMenuItem to={'/'}>Aim & Scope</JournalMenuItem>
        <JournalMenuItem to={'/'}>Editorial Board</JournalMenuItem>
        <JournalMenuItem to={'/'}>Reviewer Board</JournalMenuItem>
        <JournalMenuItem to={'/'}>Topical Advisory Panel</JournalMenuItem>
        <JournalMenuItem to={'/'}>Instructions For Authors</JournalMenuItem>
        <JournalMenuItem to={'/'}>Special issues</JournalMenuItem>
        <JournalMenuItem to={'/'}>Topics</JournalMenuItem>
        <JournalMenuItem to={'/'}>Sections and collections</JournalMenuItem>
        <JournalMenuItem to={'/'}>Articles processing charge</JournalMenuItem>
        <JournalMenuItem to={'/'}>Indexing and archiving</JournalMenuItem>
        <JournalMenuItem to={'/'}>Editor's choice articles</JournalMenuItem>
        <JournalMenuItem to={'/'}>Most cited & viewed</JournalMenuItem>
        <JournalMenuItem to={'/'}>Journal Statistics</JournalMenuItem>
        <JournalMenuItem to={'/'}>Journal History</JournalMenuItem>
        <JournalMenuItem to={'/'}>Journal Awards</JournalMenuItem>
        <JournalMenuItem to={'/'}>Society Collaborations</JournalMenuItem>
        <JournalMenuItem to={'/'}>Conferences</JournalMenuItem>
        <JournalMenuItem to={'/'}>Editorial office</JournalMenuItem>
      </ul>
    </div>
  )
}

export default JournalMenu;