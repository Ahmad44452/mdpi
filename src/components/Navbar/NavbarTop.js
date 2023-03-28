import { Link } from "react-router-dom";
import { Button, Dropdown, message } from 'antd';


const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const journalItems = [
  {
    label: 'Active Journals',
    key: '1',
  },
  {
    label: 'Find a Journal',
    key: '2',
  },
  {
    label: 'Proceeding series',
    key: '3'
  }
];

const journalProps = {
  items: journalItems,
  onClick: handleMenuClick,
};

const inormationItems = [
  {
    label: 'For Authors',
    key: '1',
  },
  {
    label: 'For Reviewers',
    key: '2',
  },
  {
    label: 'For Editors',
    key: '3'
  },
  {
    label: 'For Librarians',
    key: '4'
  },
  {
    label: 'For Publishers',
    key: '5'
  },
  {
    label: 'For Societies',
    key: '6'
  },
  {
    label: 'For Conference Organizers',
    key: '7'
  }
];

const informationProps = {
  items: inormationItems,
  onClick: handleMenuClick,
};


const aboutItems = [
  {
    label: 'Overview',
    key: '1',
  },
  {
    label: 'Contact',
    key: '2',
  },
  {
    label: 'Careers',
    key: '3'
  },
  {
    label: 'News',
    key: '4'
  },
  {
    label: 'Blog',
    key: '5'
  }
];

const aboutProps = {
  items: aboutItems,
  onClick: handleMenuClick,
};

const NavbarTop = () => {


  return (
    <nav className="navbar">
      <img src="./images/logo.png" className="navbar__logo" alt="MDPI Logo" />
      <div className="navbar__links">

        <Dropdown menu={journalProps} className="navbar__links--dropdown">
          <Button>
            Journals
          </Button>
        </Dropdown>

        <Link to='/' className="navbar__links--link">Topics</Link>

        <Dropdown menu={informationProps} className="navbar__links--dropdown">
          <Button>
            Information
          </Button>
        </Dropdown>

        <Link to='/' className="navbar__links--link">Author Services</Link>
        <Link to='/' className="navbar__links--link">Initiatives</Link>

        <Dropdown menu={aboutProps} className="navbar__links--dropdown">
          <Button>
            About
          </Button>
        </Dropdown>
      </div>
      <div className="navbar__buttons">
        <Link to='/' className="navbar__buttons--button navbar__buttons--signin">Sign in</Link>
        <Link to='/' className="navbar__buttons--button navbar__buttons--submit">Submit</Link>
      </div>
    </nav>
  )
}

export default NavbarTop;