import { Link } from "react-router-dom";
import { HiOutlineUserGroup, HiMenuAlt2, HiOutlineDownload } from 'react-icons/hi';
import { Button, Dropdown, Space, message } from 'antd';
import { SlArrowDown } from 'react-icons/sl';

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

const Article = () => {
  return (
    <div className="article">
      <div className="article__header">
        <div className="article__header--options">
          <div className="article__header--options-left">
            <span className="article__header--tag article__header--tag-purple">
              Open Access
            </span>

            <span className="article__header--tag article__header--tag-red">
              Article
            </span>
          </div>

          <div className="article__header--options-right">
            <span className="article__header--icon">
              <HiMenuAlt2 />
            </span>
            <span className="article__header--icon">
              <HiOutlineDownload />
            </span>
          </div>
        </div>
        <h3 className="article__header--title">A Formal Performance Evaluation Method for Customised Plug-and-Play Manufacturing Systems Using Coloured Petri Nets.</h3>
        <div className="article__header--authors">
          <span className="article__header--authors-icon">
            <HiOutlineUserGroup />
          </span>

          <span className="article__header--authors-names">
            by Ge Wang, Di Li, Shiyong Wang, Minghao Cheng, Ziren Luo and Renshun Liu
          </span>
        </div>

        <p className="article__header--info">Sensors 2022, 22(20), 7845; https://doi.org/10.3390/s22207845 (registering DOI) - 15 Oct 2022</p>
      </div>

      <div className="article__abstract">
        Abstract Recent technological advancements and the evolution of industrial manufacturing paradigms have substantially increased the complexity of product-specific
        production systems. To reduce the time cost of modelling and verification and to enhance the degree of uniformity in the modelling process of system components, this...
        <Link to={'/'} className="article__abstract--link">Read more</Link>
      </div>

      <div className="article__dropdown">
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Select Volume
              <SlArrowDown />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default Article;