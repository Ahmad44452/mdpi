import './styles.scss';
import Article from './Article';

const LatestArticles = () => {
  return (
    <div className="latestarticles">
      <h3 className="latestarticles__heading">Latest Articles</h3>
      <div className="latestarticles__items">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}

export default LatestArticles;