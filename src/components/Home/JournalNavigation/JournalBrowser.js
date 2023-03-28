import { BiCandles } from 'react-icons/bi';
import { Button, Dropdown, Space, message } from 'antd';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3'
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const volumesData = [
  {
    id: 0,
    name: 'Vol. 1 (2001)',
    link: '/'
  },
  {
    id: 1,
    name: 'Vol. 2 (2002)',
    link: '/'
  },
  {
    id: 2,
    name: 'Vol. 3 (2003)',
    link: '/'
  },
  {
    id: 3,
    name: 'Vol. 4 (2004)',
    link: '/'
  },
  {
    id: 4,
    name: 'Vol. 5 (2005)',
    link: '/'
  },
  {
    id: 5,
    name: 'Vol. 6 (2006)',
    link: '/'
  },
  {
    id: 6,
    name: 'Vol. 7 (2007)',
    link: '/'
  },
  {
    id: 7,
    name: 'Vol. 8 (2008)',
    link: '/'
  },
  {
    id: 8,
    name: 'Vol. 9 (2009)',
    link: '/'
  },
  {
    id: 9,
    name: 'Vol. 10 (2010)',
    link: '/'
  },
  {
    id: 10,
    name: 'Vol. 11 (2011)',
    link: '/'
  },
  {
    id: 11,
    name: 'Vol. 12 (2012)',
    link: '/'
  },
  {
    id: 12,
    name: 'Vol. 13 (2013)',
    link: '/'
  },
  {
    id: 13,
    name: 'Vol. 14 (2014)',
    link: '/'
  },
  {
    id: 14,
    name: 'Vol. 15 (2015)',
    link: '/'
  },
  {
    id: 15,
    name: 'Vol. 16 (2016)',
    link: '/'
  },
  {
    id: 16,
    name: 'Vol. 17 (2017)',
    link: '/'
  },
  {
    id: 17,
    name: 'Vol. 18 (2018)',
    link: '/'
  },
  {
    id: 18,
    name: 'Vol. 19 (2019)',
    link: '/'
  },
  {
    id: 19,
    name: 'Vol. 20 (2020)',
    link: '/'
  }

]

const JournalBrowser = () => {
  return (
    <div className="journalbrowser">
      <div className="journalbrowser__header">
        <span className="journalbrowser__header--icon"><BiCandles /></span>
        <h3 className="journalbrowser__header--title">Journal Browser</h3>
      </div>

      <div className='journalbrowser__dropdowns'>
        <div className='journalbrowser__dropdowns--item'>
          <h4 className='journalbrowser__dropdowns--item-title'>Volume</h4>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Select Volume
                <SlArrowDown />
              </Space>
            </Button>
          </Dropdown>
        </div>

        <div className='journalbrowser__dropdowns--item'>
          <h4 className='journalbrowser__dropdowns--item-title'>Issue</h4>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Select Issue
                <SlArrowDown />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>


      <div className='journalbrowser__issues'>
        <Link to={'/'} className='journalbrowser__issues--item'>
          <span className='journalbrowser__issues--item-title'>
            Forthcoming issue
          </span>
          <span className='journalbrowser__issues--item-icon'>
            <SlArrowRight />
          </span>
        </Link>

        <Link to={'/'} className='journalbrowser__issues--item'>
          <span className='journalbrowser__issues--item-title'>
            Current issue
          </span>
          <span className='journalbrowser__issues--item-icon'>
            <SlArrowRight />
          </span>
        </Link>

      </div>


      <div className='journalbrowser__volumes'>
        {
          volumesData.map(item => <Link to={item.link} key={item.id} className='journalbrowser__volumes--link'>{item.name}</Link>)
        }
      </div>
    </div>
  )
}

export default JournalBrowser;