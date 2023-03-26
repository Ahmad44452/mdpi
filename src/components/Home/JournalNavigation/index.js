import JournalMenu from "./JournalMenu";
import JournalBrowser from "./JournalBrowser";
import './styles.scss';

const JournalNavigation = () => {
  return (
    <div className="journalnav">
      <JournalMenu />
      <JournalBrowser />
    </div>
  )
}

export default JournalNavigation;