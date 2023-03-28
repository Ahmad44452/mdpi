import { HiOutlineUserGroup, HiOutlineDownload } from 'react-icons/hi';
import { Button, Dropdown, Space, message } from 'antd';
import { AiOutlineEye } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl';
import { useState } from "react";

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

const Article = ({ abstract, title, authors }) => {

  let shortAbstract = abstract.split(' ').slice(0, 75).join(' ');

  const [isReadMoreButtonVisible, setReadMoreButtonVisible] = useState(true);

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
              <AiOutlineEye />
            </span>
            <span className="article__header--icon">
              <HiOutlineDownload />
            </span>
          </div>
        </div>
        <h3 className="article__header--title">{title}</h3>
        <div className="article__header--authors">
          <span className="article__header--authors-icon">
            <HiOutlineUserGroup />
          </span>

          <span className="article__header--authors-names">
            by {authors}
          </span>
        </div>

        <p className="article__header--info">Sensors 2022, 22(20), 7845; https://doi.org/10.3390/s22207845 (registering DOI) - 15 Oct 2022</p>
      </div>

      <div className="article__abstract">
        {
          isReadMoreButtonVisible ? (<>{shortAbstract}...<span className="article__abstract--link" onClick={() => setReadMoreButtonVisible(false)}>Read more</span></>)
            : <>
              {abstract} <span className="article__abstract--link" onClick={() => setReadMoreButtonVisible(true)}>Show less</span>
            </>
        }
      </div>

      <div className="article__dropdown">
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Show Figures
              <SlArrowDown />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default Article;