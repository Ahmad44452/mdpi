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
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 1 (2001)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 2 (2002)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 3 (2003)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 4 (2004)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 5 (2005)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 6 (2006)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 7 (2007)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 8 (2008)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 9 (2009)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 10 (2010)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 11 (2011)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 12 (2012)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 13 (2013)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 14 (2014)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 15 (2015)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 16 (2016)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 17 (2017)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 18 (2018)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 19 (2019)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 20 (2020)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 21 (2021)</Link>
        <Link to='/' className='journalbrowser__volumes--link'>Vol. 22 (2022)</Link>
      </div>
    </div>
  )
}

export default JournalBrowser;