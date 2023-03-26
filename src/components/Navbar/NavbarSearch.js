import { RiSearchLine } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl';
import { Input, Button, Dropdown, Space, message } from 'antd';

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

const NavbarSearch = () => {
  return (
    <div className="navbar__search">
      <div className="navbar__search--header">
        <p className="navbar__search--header-title">Search for articles</p>
        <span className="navbar__search--header-icon">
          <RiSearchLine />
        </span>
      </div>

      <div className='navbar__search--inputs'>
        <div className='navbar__search--group'>
          <p className='navbar__search--group-title'>Title/Keyword</p>
          <Input placeholder="Basic usage" />
        </div>

        <div className='navbar__search--group'>
          <p className='navbar__search--group-title'>Author/Affiliation</p>
          <Input placeholder="Basic usage" />

        </div>

        <div className='navbar__search--group'>
          <p className='navbar__search--group-title'>Sensors</p>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Select Sensor
                <SlArrowDown />
              </Space>
            </Button>
          </Dropdown>
        </div>

        <div className='navbar__search--group'>
          <p className='navbar__search--group-title'>All Articles Type</p>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Select Article
                <SlArrowDown />
              </Space>
            </Button>
          </Dropdown>
        </div>

      </div>

    </div>
  )
}

export default NavbarSearch;